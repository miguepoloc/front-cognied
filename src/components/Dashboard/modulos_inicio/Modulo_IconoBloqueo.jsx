import React from 'react'
import { TbLockOpen,TbLock } from "react-icons/tb";
export const Modulo_IconoBloqueo = ({bloqueado, className ="icon_blocked_modulo_inicio"}) => {
  return (
    <div className="content_blocked_modulos_inicio">
    <span className="icon_blocked_modulo_inicio">
        {bloqueado ? <TbLock size={30} /> : <TbLockOpen size={30} />}
    </span>
</div>
  )
}
