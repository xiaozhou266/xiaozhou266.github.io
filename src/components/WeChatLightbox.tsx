import { X } from 'lucide-react'
import { useEffect } from 'react'

type WeChatLightboxProps = {
  open: boolean
  title: string
  hint: string
  closeLabel: string
  onClose: () => void
}

export function WeChatLightbox({ open, title, hint, closeLabel, onClose }: WeChatLightboxProps) {
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', closeOnEscape)
    document.body.classList.add('modal-open')
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('modal-open')
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="wechat-dialog" role="dialog" aria-modal="true" aria-labelledby="wechat-dialog-title">
        <button className="dialog-close" type="button" onClick={onClose} aria-label={closeLabel}><X size={20} /></button>
        <p className="section-index">WECHAT</p>
        <h2 id="wechat-dialog-title">{title}</h2>
        <img src="/assets/wechat.png" alt={hint} />
        <p>{hint}</p>
      </div>
    </div>
  )
}

