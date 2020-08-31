import React, { memo, useState, useRef, useEffect } from 'react'
import './index.scss'

export interface IProps{
  isLeft?: boolean;
  isRight?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchNav: React.FC<IProps> = (props: IProps) => {
  const { onChange, isLeft, isRight } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [isShowInput, setIsShowInput] = useState<boolean>(false)
  const date = new Date()
  const showInput: VoidFunction = () => {
    setIsShowInput(true)
  }
  const cancel: VoidFunction = () => {
    setIsShowInput(false)
  }
  useEffect(() => {
    if (isShowInput) {
      inputRef.current?.focus()
    }
  })
  return (
    <div className="top d-flex ai-center">
      {isLeft ? <h3 className="title">首页</h3> : null}
        {
          isShowInput ? (
            <div className="input-wrapper flex-1 d-flex ai-center">
              <div className="input-box flex-1 d-flex ai-center">
                <div className="icon-wrap">
                  <i className="iconfont icon-sousuo"></i>
                </div>
                <div className="search flex-1">
                  <input type="text" placeholder="搜索" ref={inputRef} onChange={onChange}/>
                </div>
              </div> 
              <div className="cancel" onClick={cancel}>取消</div>
            </div>
          ) : (
            <div className="box flex-1 d-flex jc-center ai-center" onClick={showInput}>
              <i className="iconfont icon-sousuo gray"></i>
              <span>搜索</span>
            </div>
          )
        }
      {isRight ? <div className="time">{date.getDate()}</div> : null}
    </div>
  )
}

SearchNav.defaultProps = {
  isLeft: true,
  isRight: true
}

export default memo(SearchNav)