import { Linkedin } from 'lucide-react';
import type { TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group bg-white border border-jet/8 transition-all duration-500 hover:border-gold/40">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
        <img
          src={member.image}
          alt={`${member.role} portrait placeholder`}
          className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jet/40 via-transparent to-transparent" />
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn profile`}
            className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center bg-gold text-jet opacity-0 transition-all duration-500 hover:bg-white group-hover:opacity-100"
          >
            <Linkedin className="h-4 w-4" strokeWidth={1.5} />
          </a>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-serif text-lg text-jet">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-gold">{member.role}</p>
        <div className="my-4 h-px w-8 bg-gold/40" />
        <p className="text-sm leading-relaxed text-jet/60">{member.bio}</p>
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-jet/40">Specializations</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {member.specializations.map((s) => (
              <span
                key={s}
                className="border border-jet/10 px-3 py-1 text-xs text-jet/60"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
