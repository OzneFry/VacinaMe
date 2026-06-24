export { colors } from './colors';
export { spacing } from './spacing';
export { typography } from './typography';

export const theme = {
  colors: {
    background: '#f4f8ff',
    backgroundAlt: '#eef5ff',
    surface: '#ffffff',
    surfaceMuted: '#f8fbff',
    primary: '#2563eb',
    primaryDark: '#1d4ed8',
    secondary: '#0f766e',
    success: '#16a34a',
    warning: '#d97706',
    danger: '#dc2626',
    text: '#0f172a',
    mutedText: '#64748b',
    border: '#dbe7f8',
    accent: '#60a5fa',
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
