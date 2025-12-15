import { CheckCircle2, Info, X } from 'lucide-react';

const typeStyles = {
  success: 'border-green-500/50 bg-green-500/10 text-green-100',
  info: 'border-blue-500/50 bg-blue-500/10 text-blue-100',
  error: 'border-red-500/50 bg-red-500/10 text-red-100',
};

const ToastStack = ({ toasts, onDismiss }) => (
  <div className="fixed right-4 top-20 z-[9999] flex w-80 flex-col gap-3">
    {toasts.map((toast) => (
      <div
        key={toast.id}
        className={`flex items-start gap-3 rounded-2xl border p-4 shadow-lg backdrop-blur ${typeStyles[toast.type] || typeStyles.success
          }`}
      >
        <div className="mt-1">
          {toast.type === 'error' ? (
            <X className="h-5 w-5" />
          ) : toast.type === 'info' ? (
            <Info className="h-5 w-5" />
          ) : (
            <CheckCircle2 className="h-5 w-5" />
          )}
        </div>
        <div className="flex-1 text-sm font-semibold leading-tight">{toast.message}</div>
        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={() => onDismiss(toast.id)}
          className="rounded-full bg-white/10 p-1 text-white transition hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    ))}
  </div>
);

export default ToastStack;

