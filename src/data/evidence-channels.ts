export type EvidenceChannelType = 'github' | 'writing' | 'research' | 'talk';

export interface EvidenceChannel {
  id: string;
  label: string;
  description: string;
  /** Only present when a confirmed, public URL exists. */
  url?: string;
  type: EvidenceChannelType;
}

/**
 * Public evidence channels.
 *
 * IA v1 §10 treats platforms such as GitHub and WeChat as *evidence channels*,
 * not as top-level content domains. They therefore surface as entry points inside
 * Work / Journey / About rather than owning a navigation item of their own. This
 * replaces the retired "Digital Footprints" domain.
 *
 * Only channels with a confirmed public URL are listed. A channel without one is
 * omitted entirely rather than rendered with a "link to be confirmed" placeholder.
 *
 * Not listed yet:
 *   - WeChat Official Account — public URL is not confirmed.
 *   - Public projects — work now lives at /work and is reachable through primary
 *     navigation, so it is not duplicated here as an external channel.
 */
export const evidenceChannels: EvidenceChannel[] = [
  {
    id: 'github',
    label: 'GitHub',
    description: 'Public repositories and commit history over time.',
    url: 'https://github.com/LyraWang6688',
    type: 'github',
  },
];
