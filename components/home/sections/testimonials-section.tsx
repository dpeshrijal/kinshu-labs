import Image from "next/image";
import { Quote, Star } from "lucide-react";

import { testimonials } from "../home-data";

export function TestimonialsSection() {
  const testimonial = testimonials[0];

  return (
    <div id="about" className="rounded-[20px] border border-[#ebe7df] bg-[radial-gradient(circle_at_top,rgba(242,247,243,0.85),transparent_42%),white] p-5 shadow-[0_16px_36px_rgba(24,38,24,0.04)] sm:p-6">
      <Quote className="h-10 w-10 text-[var(--color-accent)]" />
      <p className="mt-8 text-[1.15rem] leading-10 text-[#1f2422] sm:text-[1.25rem]">
        {testimonial.quote}
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {testimonial.photoUrl ? (
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={testimonial.photoUrl}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            // Easy swap later: add `photoUrl` in home-data.ts for a real avatar.
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-white">
              {testimonial.placeholderLabel}
            </div>
          )}
          <div>
            <div className="font-medium text-[#111111]">{testimonial.name}</div>
            <div className="text-sm text-[#5b625d]">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[var(--color-accent)]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>
    </div>
  );
}
