"use client";

import React from 'react';
import { Loader, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * ToastCenter
 * Props:
 * - toasts: Array<{ id: string, title: string, description?: string, progress?: number, status?: 'pending'|'in-progress'|'success'|'error' }>
 * - onDismiss?: (id: string) => void
 */
const ToastCenter = ({ toasts = [], onDismiss }) => {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div style={containerStyle}>
      {toasts.map((t) => (
        <div key={t.id} style={toastStyle}>
          <div style={headerStyle}>
            <div style={iconWrapStyle}>
              {t.status === 'success' ? (
                <CheckCircle size={18} color="#10b981" />
              ) : t.status === 'error' ? (
                <AlertCircle size={18} color="#ef4444" />
              ) : (
                <Loader size={18} className="animate-spin" style={{ color: '#2563eb' }} />
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div style={titleStyle}>{t.title}</div>
              {t.description ? (
                <div style={descStyle}>{t.description}</div>
              ) : null}
            </div>
            {onDismiss ? (
              <button
                onClick={() => onDismiss(t.id)}
                aria-label="Dismiss"
                style={dismissBtnStyle}
              >
                ×
              </button>
            ) : null}
          </div>
          {typeof t.progress === 'number' ? (
            <div style={progressWrapStyle}>
              <div
                style={{
                  ...progressBarStyle,
                  width: `${Math.max(0, Math.min(100, t.progress))}%`,
                  background:
                    t.status === 'success' ? '#10b981' : t.status === 'error' ? '#ef4444' : '#3b82f6',
                }}
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

const containerStyle = {
  position: 'fixed',
  top: 16,
  right: 16,
  zIndex: 2000,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  maxWidth: 360,
};

const toastStyle = {
  background: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: 10,
  boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
  padding: '10px 12px',
  minWidth: 280,
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};

const iconWrapStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
};

const titleStyle = {
  fontSize: 14,
  fontWeight: 600,
  color: '#111827',
};

const descStyle = {
  fontSize: 12,
  color: '#6b7280',
  marginTop: 2,
};

const dismissBtnStyle = {
  background: 'transparent',
  border: 'none',
  color: '#9ca3af',
  fontSize: 18,
  lineHeight: 1,
  cursor: 'pointer',
};

const progressWrapStyle = {
  marginTop: 8,
  width: '100%',
  height: 6,
  background: '#f3f4f6',
  borderRadius: 999,
  overflow: 'hidden',
};

const progressBarStyle = {
  height: '100%',
  transition: 'width 250ms ease',
};

export default ToastCenter;
