
export interface IStorage {
  store: Storage;
  type: (type: string) => void;
  set: (key: string, value: any) => void;
  get: (key: string) => any;
  remove: (key: string) => void;
} 

const storage: IStorage = {
  store: window.localStorage,
  type(type) {
    if (type === "session") {
      this.store = window.sessionStorage
    } else {
      this.store = window.localStorage
    }
  },
  set(key, val) {
    if (typeof val === 'object') {
      try {
        val = JSON.stringify(val)
      } catch(e) {
        return new Error('数据转化失败！')
      }
    }
    this.store.setItem(key, val)
  },
  get(key) {
    let val = this.store.getItem(key)
    try {
      val = JSON.parse(val!)
    } catch(e) {
      // 转化失败 可能是字符串
    }
    return val
  },
  remove(key) {
    this.store.removeItem(key)
  }
}

export default storage