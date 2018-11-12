user static

import util from './util'
/**
 * 
 * 
 */
let target = 'all'

/**
 * set存储方法
 * 
 */
let set = (name, value, expiresAt) => {
	return getStorage().set(name, value, expiresAt);
}
/**
 * get获取数据方法
 */
let get = (name) => {
	return getStorage().get(name);
}
/**
 * remove清除数据
 * 
 */
let remove = (name) => {
	return getStorage().remove(name);
}
/**
 * flush 刷新
 */
let flush = (name) => {
	return getStorage().flush(name);
}

/**
 * localStorage方法
 */
let getLocalStorage = () => {
	return {
		set: (name, value, expiresAt) => {
			value = JSON.stringify({
				value,
				expiresAt
			});
			localStorage.setItem(name, value);
		},
		get: (name) => {
			let result = localStorage.getItem(name);
			if (result) {
				result = JSON.parse(result);
				if (result.expiresAt !== 0 && result.expiresAt < (new Date()).valueOf()) {
					localStorage.removeItem(name);
					return null;
				}
				return result.value;
			}
			return null;
		},
		remove: (name) => {
			localStorage.removeItem(name)
		},
		flush: () => {
			for (let name in localStorage) {
				localStorage.removeItem(name);
			}
		}
	}
}
/**
 * getLocalStorage()
 *  '{"name":"小明","age":18}'//json字符串
 * localStorage只能存储json字符串
 * 把一个对象通过stringify之后变成字符串，再提交给后台或者存储在storage是很常用的手段（storage是存的key，value；value只能存字符串，而不能是json对象）。
 */
let getLocalStorage = (name, value, expiresAt) => {
	return {
		set: (name, value, expiresAt) => {
			value = Json.stringify({ //storage是存的key(name)，value；value只能存字符串，而不能是json对象存储只能是json字符串
				value,
				expiresAt
			});
			localStorage.setItem(name, value);
		},
		get: (name) => {
			let result = localStorage.getItem(name);
			if (result) {
				result = JSON.parse(result) //json字符串转为JSON对象
				//(new Date()).valueOf()返回Date对象的原始值
				if (result.expiresAt !== 0 && result.expiresAt < (new Date()).valueOf()) {
					localStorage.remove(name);
					return null;
				}
				return result.value;
			}
		},
		remove: (name) => {
			localStorage.removeItem(name);
		},
		flush: () => {
			for (let name in localStorage) {
				localStorage.removeItem(name);
			}
		}
	}
}

/**
 * getSessionStorage()
 */
let getSessionStorage = (name, value, expiresAt) => {

	return {
		set: (name, value, expiresAt) => {
			value = JSON.stringify({
				value,
				expiresAt
			})
			sessionStorage.setItem('name', value);
		},
		get: (name) => {
			let result = sessionStorage.getItem(name);
			if (result) {
				if (result.expiresAt !== 0 && result.expiresAt < (new.Date()).valueOf()) {
					sessionStorage.removeItem(name);
					return null
				}
				return result.value;
			}
		},
		remove: (name) => {
			sessionStorage.removeItem(name);
		},
		flush: () => {
			for (let name in sessionStorage) {
				sessionStorage.removeItem(name);
			}
		}

	}
}
/**
 * 
 * cookies()
 * 
 */
let getCookies = (name, value, expiresAt) => {
	return {
		set: (name, value, expiresAt) => {
			Cookies.set('name', value);
		},
		get: (name) => {
			Cookies.get('name');
		},
		remove: (name) => {
			Cookies.remove('name');
		},
		flush: () => {
			for (let name in cookies.getAll()) {
				cookies.remove(name);
			}
		}
	}
}
/**
 * getStorage()
 * 获取存储对象
 *	@return Object *
 *	@author Verdient。
 */
let getStorage = (target) => {
	switch (target) {
		case 'localStorage':
			getLocalStorage();
			break;
		case 'sessionStorage':
			getSessionStorage();
			break;
		case 'all':
			getSessionStorage();
			break;
	}
}


/**
 * getAll()
 * 获取全目标存储
 * -------------
 * @return Object
 * @author Verdient。
 */
let getAll = () => {
	let targets = getEnabledTatgets();
	return {
		set: (name, value, expiresAt) => {
			targets.forEach(target => {
				target.set(name, value, expiresAt);
			});
		},
		get: (name) => {
			for (let i of targets) {
				let result = i.get(name)
				if (result) {
					return result;
				}
			}
			return null;
		},
		flush: () => {
			targets.forEach(target => {
				target.flush();
			});
		},
		remove: (name) => {
			targets.forEach(target => {
				target.remove(name);
			});
		}
	}
}

/**
 * getEnabledTatgets()
 * 获取允许的目标
 * -------------------
 * @return Array
 * @author Verdient。
 */
let getEnabledTatgets = () => {
	let targets = [getCookie()];

	if (typeof sessionStorage == 'object') {
		targets.push(getSessionStorage());
	}
	if (typeof localStorage == 'object') {
		targets.push(getLocalStorage());
	}
	return targets;
}

export default {
	setTarget(val) { /**获取目标值 */
		target = val;
	},
	get,
	set,
	remove,
	flush
}