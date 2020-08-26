import React, { memo } from 'react'
import './index.scss'

const SignTop: React.FC = () => {
  return (<>
    {/* <!-- 头像和背景 --> */}
		<div className="sign-top">
			<div className="sign-bg">
				<div className="filter"></div>
			</div>
			<div className="photo"></div>
		</div>
    {/* <!-- 头像和背景 --> */}
  </>)
}

export default memo(SignTop)