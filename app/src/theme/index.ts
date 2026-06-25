export { colors } from './colors';
export { spacing } from './spacing';
export { typography } from './typography';

export const theme = {
  colors: {
    background: '#f8fafc',
    backgroundAlt: '#eff6ff',
    surface: '#ffffff',
    surfaceMuted: '#f8fafc',
    primary: '#2563eb',
    primaryDark: '#1d4ed8',
    secondary: '#3b82f6',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    text: '#0f172a',
    mutedText: '#64748b',
    border: '#e2e8f0',
    accent: '#93c5fd',
  },
  spacing: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadius: {
    md: 12,
    lg: 16,
    xl: 20,
    pill: 999,
  },
  typography: {
    title: {
      fontSize: 24,
      fontWeight: '700' as const,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '600' as const,
    },
    body: {
      fontSize: 14,
      fontWeight: '400' as const,
    },
    caption: {
      fontSize: 12,
      fontWeight: '500' as const,
    },
  },
} as const;
