import React from 'react';

interface Props {
  title: string;
}

export default function SEO({ title }: Props) {
  return <title>{title} | DevStickers</title>;
}
