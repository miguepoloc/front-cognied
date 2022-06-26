import React from 'react'
import { TbLockOpen, TbLock } from 'react-icons/tb'
export const ModuloIconoBloqueo = ({
  bloqueado
  // className = 'icon_blocked_modulo_inicio'
}) => {
  return (
    <div className="content_blocked_modulos_inicio">
      <span className="icon_blocked_modulo_inicio">
        {bloqueado ? <TbLock className='icon_blocked_unloked' /> : <TbLockOpen className='icon_blocked_unloked' />}
      </span>
    </div>
  )
}
