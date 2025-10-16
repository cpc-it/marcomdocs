// src/pages/storybook/index.tsx
import React from 'react';

export default function StorybookPage() {
  return (
    <div style={{ height: 'calc(100vh - var(--ifm-navbar-height))' }}>
      <iframe
        src="/components/"
        title="Components (Storybook)"
        style={{ width: '100%', height: '100%', border: 0 }}
      />
    </div>
  );
}
