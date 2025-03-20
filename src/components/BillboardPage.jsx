import classNames from 'classnames'
import {useControls} from 'leva'
import React from 'react'
import {useZustand} from '../store/useZustand'

const proxyDomain = import.meta.env.VITE_PROXY_DOMAIN

export const BillboardPage = () => {
  const {
    selMenuIndex,
    menuArr,
  } = useZustand()

  const {fullScreen} = useControls({
    fullScreen: {value: false, label: 'Full Screen'},
  })

  const billboardDomain = menuArr[selMenuIndex]?.domain

  return (
    <div
      className={classNames({
        'absolute z-10 w-full h-full bg-black rounded': true,
        'hidden': !fullScreen,
      })}
    >
      {billboardDomain ?
        <iframe
          className='w-full h-full'
          src={proxyDomain.replace('{DOMAIN}', billboardDomain)}
          title={billboardDomain}
        /> :
        <div>Page not exist.</div>
      }
    </div>
  )
}
