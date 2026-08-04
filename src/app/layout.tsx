'use client';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bridgeScript = `
    (function() {
      function reportError(type, data) {
        if (window.parent) {
          window.parent.postMessage({
            type: 'CLIENT_CONSOLE_ERROR',
            errorType: type,
            data: data
          }, '*');
        }
      }
      window.addEventListener('error', function(e) {
        reportError('uncaught_exception', {
          message: e.message || 'Unknown error',
          filename: e.filename || '',
          lineno: e.lineno || 0,
          colno: e.colno || 0,
          stack: e.error ? e.error.stack : ''
        });
      });
      window.addEventListener('unhandledrejection', function(e) {
        var reason = e.reason;
        var msg = reason ? (reason.message || String(reason)) : 'Unhandled Promise Rejection';
        var stack = (reason && reason.stack) ? reason.stack : '';
        reportError('unhandled_rejection', {
          message: msg,
          filename: '',
          lineno: 0,
          colno: 0,
          stack: stack
        });
      });
      var originalError = console.error;
      console.error = function() {
        originalError.apply(console, arguments);
        var args = Array.prototype.slice.call(arguments);
        var msg = args.map(function(arg) {
          if (arg instanceof Error) return arg.message + '\\n' + arg.stack;
          if (typeof arg === 'object') {
            try { return JSON.stringify(arg); } catch(e) { return String(arg); }
          }
          return String(arg);
        }).join(' ');

        if (!msg.includes('Minified React error') && !msg.includes('Hydration failed')) {
          reportError('console_error', {
            message: msg,
            filename: '',
            lineno: 0,
            colno: 0,
            stack: ''
          });
        }
      };
    })();
  `;

  return (
    <html lang="en">
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{ __html: bridgeScript }} />
        {children}
        <Toaster />
      </body>
    </html>
  )
}