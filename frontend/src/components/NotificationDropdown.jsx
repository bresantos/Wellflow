import React from 'react';

export default function NotificationDropdown({ open, notifications = [], onClose, width = 340, title = 'Notificações' }) {
  if (!open) return null;

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      <div className="notif-overlay" onClick={onClose} />

      <div className="notif-dropdown" style={{ width }} role="dialog" aria-label={title}>
        <div className="notif-dropdown-header">
          <h3 className="notif-title">{title}</h3>
          {unreadCount > 0 && (
            <p className="notif-sub">Você tem {unreadCount} notificação{unreadCount > 1 ? 'ões' : ''} não lida{unreadCount > 1 ? 's' : ''}</p>
          )}
        </div>

        <div className="notif-list">
          {notifications.length === 0 ? (
            <div className="notif-empty">Nenhuma notificação</div>
          ) : (
            notifications.map((notif) => (
              <div
                key={notif.id}
                className={`notif-item ${notif.read ? 'read' : 'unread'}`}
                onClick={() => console.log('Notificação clicada:', notif.id)}
              >
                <div className="notif-item-body">
                  <div className="notif-item-title" style={{ fontWeight: notif.read ? 400 : 600 }}>{notif.titulo}</div>
                  {notif.descricao && <div className="notif-item-desc">{notif.descricao}</div>}
                  {notif.data && <div className="notif-item-date">{notif.data}</div>}
                </div>
                {!notif.read && <div className="notif-item-dot" />}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
