var url = 'https://www.59v.net';
var ajax_timeout = 5000;

// 请求方法
async function request(reqUrl) {
	console.log(reqUrl)
	let resp = await axios({
		method: 'get',
		url: reqUrl,
		sslVerify: false,
		timeout: ajax_timeout,
		headers: {
			'User-Agent': MOBILE_UA,
		}
	})
	if (resp.status == 200) {
		return resp.data;
	} else {
		return null;
	}

}

// 获取分类
async function home() {
	var rule = {
		"分类": "电影&电视剧&综艺&动漫",
		"分类值": "1&2&3&4",
	}
	let classes = [];
	let type_ids = rule["分类值"].split("&");
	rule["分类"].split("&").some((ele, index) => {
		classes.push({
			type_id: `${type_ids[index]}`,
			type_name: ele
		});
	})
	return {
		class: classes,
	};
}

// 获取列表
async function category(inReq) {
	const tid = inReq.id;
	const pg = inReq.page;
	let page = pg || 1;
	if (page == 0) page = 1;
	var link = url + `/vodshow/${tid}--------${page}---/`
	const html = await request(link);
	if (html === null) {
		return {
			page: 1,
			pagecount: 0,
			list: [],
		};
	}
	xiyueta.load(html)
	let books = [];
	xiyueta('.module').eq(0).find('.module-items a').each(function() {
		books.push({
			book_id: xiyueta(this).attr('href'),
			book_name: xiyueta(this).attr('title'),
			book_pic: url + xiyueta(this).find('img').attr('data-original')
		});
	})
	const endPage = xiyueta('a:contains(尾页)').attr("href");
	return {
		page: page,
		pagecount: getStrByRegex(/--------(.*?)---/, endPage),
		list: books,
	};
}

// 获取详细列表 
async function detail(inReq) {
	const ids = [inReq.id];
	const books = [];
	for (const id of ids) {
		const html = await request(url + `${id}`);
		if (html === null) {
			break;
		}
		xiyueta.load(html)
		let book = {
			book_name: xiyueta('.module-info-heading h1').text().trim(),
			book_director: xiyueta('.module-info-item-content a').eq(0).text().trim(),
			book_content: xiyueta('.module-info-introduction-content').text().trim(),
			volumes: '',
		};
		let froms = [];
		xiyueta('#y-playList span').each(function() {
			froms.push(xiyueta(this).text());
		})
		book.froms = froms.join('$$$');
		let fromUrls = [];
		xiyueta('.module-play-list').each(function() {
			let urls = [];
			xiyueta(this).find('.module-play-list-link').each(function() {
				const name = xiyueta(this).find("span").text();
				const link = xiyueta(this).attr('href');

				urls.push(name + '$' + link);
			})
			fromUrls.push(urls.join('#'))
		})
		book.urls = fromUrls.join('$$$');
		books.push(book);
	}
	return {
		list: books,
	};
}

// 获取内容
async function play(inReq) {
	let id = inReq.id;
	const html = await request(url + id);
	if (html === null) {
		return {
			content: "",
			label: ""
		};
	}
	let player_str = getStrByRegex(/<script type="text\/javascript">var player_aaaa=(.*?)<\/script>/, html);
	let play_dic = JSON.parse(player_str);
	return {
		content: !!play_dic['url'] ? decodeURIComponent(play_dic['url']) : '',
		label: inReq.label
	};
}

// 搜索
async function search(inReq) {
	const wd = inReq.wd;
	const html = await request(`${url}/vodsearch/${wd}-------------/`);
	if (html === null) {
		return {
			list: [],
		};
	}
	xiyueta.load(html)
	let books = [];
	xiyueta('.module-card-item').each(function() {
		books.push({
			book_id: xiyueta(this).find('a').attr('href'),
			book_name: xiyueta(this).find("strong").text(),
			book_pic: url + xiyueta(this).find('img').attr('data-original')
		});
	})
	return {
		list: books,
	};
}