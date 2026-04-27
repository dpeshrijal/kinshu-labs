"use client";

import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Lock,
} from "lucide-react";

import { BrandMark } from "@/components/home/brand-mark";
import {
  availabilityOptions,
  engineerRoleOptions,
  technologyOptions,
  yearExperienceOptions,
} from "./join-funnel-data";
import { cn } from "@/lib/utils";

type JoinStep = 1 | 2 | 3 | 4 | 5;

interface JoinContactFields {
  fullName: string;
  email: string;
  portfolio: string;
  linkedin: string;
}

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

function StepFrame({
  step,
  children,
}: {
  step: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}) {
  const progressWidth = `${step * 25}%`;

  return (
    <div className="mx-auto w-full max-w-[90rem] rounded-[26px] border border-[#ece6dc] bg-white px-5 py-6 shadow-[0_30px_80px_rgba(20,32,18,0.08)] sm:px-8 sm:py-8 lg:px-10">
      <div className="flex items-center justify-between gap-4 text-[#131515]">
        <Link href="/" className="inline-flex items-center gap-3">
          <BrandMark className="h-7 w-7 text-[var(--color-accent)]" />
          <span className="text-lg font-medium tracking-[-0.02em]">
            Kinshu Labs
          </span>
        </Link>
        <span className="text-sm text-[#6f7571]">Step {step} of 4</span>
      </div>

      <div className="mt-7 h-[6px] rounded-full bg-[#edf0ec]">
        <div
          className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-300"
          style={{ width: progressWidth }}
        />
      </div>

      {children}
    </div>
  );
}

function IconBadge({
  icon: Icon,
}: {
  icon: LucideIcon;
}) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(240,243,239,0.9))] text-[var(--color-accent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
      <Icon className="h-6 w-6" />
    </div>
  );
}

function RoleCard({
  selected,
  title,
  description,
  icon,
  onClick,
}: {
  selected: boolean;
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex min-h-[9.2rem] flex-col items-start rounded-[18px] border bg-white px-5 py-5 text-left shadow-[0_12px_32px_rgba(20,32,18,0.04)] transition duration-200 hover:border-[#cfe0d8] hover:shadow-[0_18px_40px_rgba(20,32,18,0.06)]",
        selected
          ? "border-[var(--color-accent)] shadow-[0_18px_40px_rgba(20,32,18,0.08)]"
          : "border-[#e8e4db]",
      )}
    >
      {selected ? (
        <span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent)] text-white">
          <Check className="h-4 w-4" />
        </span>
      ) : (
        <span className="absolute right-4 top-4 inline-flex h-6 w-6 rounded-full border border-[#d3d8d4]" />
      )}

      <IconBadge icon={icon} />

      <div className="mt-5 text-[1.12rem] font-semibold tracking-[-0.03em] text-[#101111]">
        {title}
      </div>
      <p className="mt-2 max-w-[16rem] text-[0.98rem] leading-[1.55] text-[#6d736f]">
        {description}
      </p>
    </button>
  );
}

function AvailabilityCard({
  selected,
  title,
  description,
  icon,
  onClick,
}: {
  selected: boolean;
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex min-h-[10.5rem] flex-col items-center justify-center rounded-[18px] border bg-white px-5 py-6 text-center shadow-[0_12px_32px_rgba(20,32,18,0.04)] transition duration-200 hover:border-[#cfe0d8] hover:shadow-[0_18px_40px_rgba(20,32,18,0.06)]",
        selected
          ? "border-[var(--color-accent)] shadow-[0_18px_40px_rgba(20,32,18,0.08)]"
          : "border-[#e8e4db]",
      )}
    >
      {selected ? (
        <span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent)] text-white">
          <Check className="h-4 w-4" />
        </span>
      ) : (
        <span className="absolute right-4 top-4 inline-flex h-6 w-6 rounded-full border border-[#d3d8d4]" />
      )}

      <IconBadge icon={icon} />
      <div className="mt-5 text-[1.2rem] font-semibold tracking-[-0.03em] text-[#101111]">
        {title}
      </div>
      <p className="mt-2 max-w-[16rem] text-[0.98rem] leading-[1.55] text-[#6d736f]">
        {description}
      </p>
    </button>
  );
}

function FooterActions({
  canContinue,
  onContinue,
  showBack = false,
  onBack,
  continueLabel = "Continue",
  submitting = false,
}: {
  canContinue: boolean;
  onContinue?: () => void;
  showBack?: boolean;
  onBack?: () => void;
  continueLabel?: string;
  submitting?: boolean;
}) {
  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        {showBack ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[1rem] font-medium text-[#313834] transition hover:text-[#111111]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        ) : (
          <span />
        )}
      </div>

      <button
        type={onContinue ? "button" : "submit"}
        onClick={onContinue}
        disabled={!canContinue || submitting}
        className={cn(
          "inline-flex min-h-[3.75rem] items-center justify-center gap-3 rounded-[12px] px-8 text-[1.05rem] font-medium transition",
          canContinue && !submitting
            ? "bg-[var(--color-accent)] text-white shadow-[0_14px_32px_rgba(31,79,60,0.22)] hover:bg-[#173f31]"
            : "cursor-not-allowed bg-[#d8e1dc] text-white",
        )}
      >
        {submitting ? "Submitting..." : continueLabel}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function TechnologyTag({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-[8px] border px-3 text-[0.95rem] font-medium transition",
        selected
          ? "border-[#176347] bg-[#f4faf6] text-[#176347]"
          : "border-[#dde3df] bg-white text-[#252a28] hover:border-[#ccd8d1]",
      )}
    >
      <span>{label}</span>
      {selected ? <CheckCircle2 className="h-4 w-4 text-[#176347]" /> : null}
    </button>
  );
}

export function JoinFunnelPage() {
  const [step, setStep] = useState<JoinStep>(1);
  const [roles, setRoles] = useState<string[]>([]);
  const [yearsExperience, setYearsExperience] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [availability, setAvailability] = useState("");
  const [contact, setContact] = useState<JoinContactFields>({
    fullName: "",
    email: "",
    portfolio: "",
    linkedin: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function toggleRole(roleId: string) {
    setRoles((current) =>
      current.includes(roleId)
        ? current.filter((item) => item !== roleId)
        : [...current, roleId],
    );
  }

  function toggleTechnology(id: string) {
    setTechnologies((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");
    setSubmitting(true);

    const selectedRoleLabels = engineerRoleOptions
      .filter((option) => roles.includes(option.id))
      .map((option) => option.label);
    const selectedAvailability = availabilityOptions.find(
      (option) => option.id === availability,
    );

    const payload = {
      full_name: contact.fullName,
      email: contact.email,
      portfolio: contact.portfolio,
      linkedin: contact.linkedin,
      primary_roles: selectedRoleLabels.join(", "),
      years_experience: yearsExperience,
      technologies: technologies.join(", "),
      availability: selectedAvailability?.label ?? availability,
      source: "Kinshu Labs engineer talent pool funnel",
    };

    try {
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      setStep(5);
    } catch {
      setSubmitError("We couldn't submit the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const canContinueStep1 = roles.length > 0;
  const canContinueStep2 = yearsExperience.trim() !== "" && technologies.length > 0;
  const canContinueStep3 = availability.trim() !== "";
  const canSubmitContact =
    contact.fullName.trim() !== "" && contact.email.trim() !== "";

  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
      {step === 1 ? (
        <StepFrame step={1}>
          <section className="mx-auto flex max-w-[74rem] flex-col items-center pb-2 pt-12 text-center sm:pt-14">
            <h1 className="max-w-[34rem] text-[2.35rem] font-semibold tracking-[-0.04em] text-[#111111] sm:text-[3.3rem] sm:leading-[1.08]">
              What&apos;s your primary role?
            </h1>
            <p className="mt-4 text-[1.1rem] text-[#6d736f]">
              Select the role that best describes your expertise.
            </p>

            <div className="mt-10 grid w-full gap-4 md:grid-cols-2 xl:grid-cols-3">
              {engineerRoleOptions.map((option) => (
                <RoleCard
                  key={option.id}
                  selected={roles.includes(option.id)}
                  title={option.label}
                  description={option.description}
                  icon={option.icon}
                  onClick={() => toggleRole(option.id)}
                />
              ))}
            </div>

            <div className="mt-10 flex w-full justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!canContinueStep1}
                className={cn(
                  "inline-flex min-h-[3.75rem] items-center justify-center gap-3 rounded-[12px] px-8 text-[1.05rem] font-medium transition",
                  canContinueStep1
                    ? "bg-[var(--color-accent)] text-white shadow-[0_14px_32px_rgba(31,79,60,0.22)] hover:bg-[#173f31]"
                    : "cursor-not-allowed bg-[#d8e1dc] text-white",
                )}
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </section>
        </StepFrame>
      ) : null}

      {step === 2 ? (
        <StepFrame step={2}>
          <section className="mx-auto flex max-w-[84rem] flex-col items-center pb-2 pt-12 text-center sm:pt-14">
            <h1 className="max-w-[38rem] text-[2.35rem] font-semibold tracking-[-0.04em] text-[#111111] sm:text-[3.3rem] sm:leading-[1.08]">
              Tell us about your experience
            </h1>
            <p className="mt-4 text-[1.1rem] text-[#6d736f]">
              Add your experience and the technologies you work with.
            </p>

            <div className="mt-10 w-full text-left">
              <label className="block">
                <span className="mb-2 block text-[0.98rem] font-medium text-[#202522]">
                  Years of professional experience
                </span>
                <div className="relative">
                  <select
                    value={yearsExperience}
                    onChange={(event) => setYearsExperience(event.target.value)}
                    className={cn(
                      "h-[3.6rem] w-full appearance-none rounded-[12px] border border-[#e4dfd6] bg-white px-4 pr-10 text-[1rem] outline-none transition focus:border-[#b8c8bf]",
                      yearsExperience ? "text-[#111111]" : "text-[#98a09c]",
                    )}
                  >
                    <option value="">Select years of experience</option>
                    {yearExperienceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#202522]" />
                </div>
              </label>

              <div className="mt-5">
                <div className="mb-3 text-[0.98rem] font-medium text-[#202522]">
                  Core technologies (select relevant)
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologyOptions.map((option) => (
                    <TechnologyTag
                      key={option.id}
                      label={option.label}
                      selected={technologies.includes(option.id)}
                      onClick={() => toggleTechnology(option.id)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <FooterActions
              showBack
              onBack={() => setStep(1)}
              canContinue={canContinueStep2}
              onContinue={() => setStep(3)}
            />
          </section>
        </StepFrame>
      ) : null}

      {step === 3 ? (
        <StepFrame step={3}>
          <section className="mx-auto flex max-w-[64rem] flex-col items-center pb-2 pt-12 text-center sm:pt-14">
            <h1 className="max-w-[30rem] text-[2.35rem] font-semibold tracking-[-0.04em] text-[#111111] sm:text-[3.55rem] sm:leading-[1.08]">
              When do you want to start?
            </h1>
            <p className="mt-4 text-[1.08rem] text-[#6d736f]">
              This helps us match you with the right opportunities.
            </p>

            <div className="mt-12 grid w-full gap-4 md:grid-cols-3">
              {availabilityOptions.map((option) => (
                <AvailabilityCard
                  key={option.id}
                  selected={availability === option.id}
                  title={option.label}
                  description={option.description}
                  icon={option.id === "one-to-two-months" ? Clock3 : CalendarDays}
                  onClick={() => setAvailability(option.id)}
                />
              ))}
            </div>

            <FooterActions
              showBack
              onBack={() => setStep(2)}
              canContinue={canContinueStep3}
              onContinue={() => setStep(4)}
            />
          </section>
        </StepFrame>
      ) : null}

      {step === 4 ? (
        <StepFrame step={4}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-[36rem] pb-3 pt-10 sm:pt-12"
          >
            <h1 className="text-center text-[2.35rem] font-semibold tracking-[-0.04em] text-[#111111] sm:text-[3rem]">
              Let&apos;s get your basic information
            </h1>
            <p className="mt-3 text-center text-[1.08rem] text-[#6d736f]">
              We&apos;ll use this to get in touch with you about relevant opportunities.
            </p>

            <div className="mt-10 space-y-6">
              <label className="block">
                <span className="mb-2 block text-[0.98rem] font-medium text-[#202522]">
                  Full name
                </span>
                <input
                  value={contact.fullName}
                  onChange={(event) =>
                    setContact((current) => ({
                      ...current,
                      fullName: event.target.value,
                    }))
                  }
                  placeholder="Enter your full name"
                  className="h-[3.75rem] w-full rounded-[12px] border border-[#e4dfd6] bg-white px-4 text-[1rem] text-[#111111] outline-none placeholder:text-[#a0a49f] focus:border-[#b8c8bf]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[0.98rem] font-medium text-[#202522]">
                  Email address
                </span>
                <input
                  type="email"
                  value={contact.email}
                  onChange={(event) =>
                    setContact((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  placeholder="Enter your email address"
                  className="h-[3.75rem] w-full rounded-[12px] border border-[#e4dfd6] bg-white px-4 text-[1rem] text-[#111111] outline-none placeholder:text-[#a0a49f] focus:border-[#b8c8bf]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[0.98rem] font-medium text-[#202522]">
                  Portfolio / GitHub <span className="font-normal text-[#7b817d]">(optional)</span>
                </span>
                <input
                  value={contact.portfolio}
                  onChange={(event) =>
                    setContact((current) => ({
                      ...current,
                      portfolio: event.target.value,
                    }))
                  }
                  placeholder="https://github.com/yourusername"
                  className="h-[3.75rem] w-full rounded-[12px] border border-[#e4dfd6] bg-white px-4 text-[1rem] text-[#111111] outline-none placeholder:text-[#a0a49f] focus:border-[#b8c8bf]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[0.98rem] font-medium text-[#202522]">
                  LinkedIn profile <span className="font-normal text-[#7b817d]">(optional)</span>
                </span>
                <input
                  value={contact.linkedin}
                  onChange={(event) =>
                    setContact((current) => ({
                      ...current,
                      linkedin: event.target.value,
                    }))
                  }
                  placeholder="https://linkedin.com/in/yourname"
                  className="h-[3.75rem] w-full rounded-[12px] border border-[#e4dfd6] bg-white px-4 text-[1rem] text-[#111111] outline-none placeholder:text-[#a0a49f] focus:border-[#b8c8bf]"
                />
              </label>
            </div>

            <div className="mt-6 rounded-[14px] border border-[#deeadf] bg-[#f5faf6] px-5 py-4">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#1b694d]">
                  <Lock className="h-5.5 w-5.5 stroke-[2]" />
                </div>
                <div>
                  <div className="text-[1.08rem] font-semibold text-[#1d6048]">
                    Your privacy matters
                  </div>
                  <p className="mt-1.5 text-[0.98rem] leading-[1.55] text-[#5e6662]">
                    Your information is safe with us and will never be shared without your permission.
                  </p>
                </div>
              </div>
            </div>

            {submitError ? (
              <p className="mt-5 text-sm text-[#b94a48]">{submitError}</p>
            ) : null}

            <FooterActions
              showBack
              onBack={() => setStep(3)}
              canContinue={canSubmitContact}
              continueLabel="Join the talent pool"
              submitting={submitting}
            />

            <p className="mt-4 text-[0.96rem] leading-[1.55] text-[#6c7470]">
              By proceeding, you agree to our{" "}
              <Link href="#" className="font-medium text-[#176347] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="font-medium text-[#176347] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </StepFrame>
      ) : null}

      {step === 5 ? (
        <div className="mx-auto mt-4 flex min-h-[78vh] w-full max-w-[54rem] items-center justify-center">
          <section className="w-full rounded-[26px] border border-[#ece6dc] bg-white px-6 py-12 text-center shadow-[0_30px_80px_rgba(20,32,18,0.08)] sm:px-10 sm:py-16">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#e2efe6] text-[var(--color-accent)] mx-auto">
              <Check className="h-14 w-14 stroke-[2.25]" />
            </div>

            <h1 className="mt-10 text-[2.9rem] font-semibold tracking-[-0.05em] text-[#111111] sm:text-[3.3rem]">
              You&apos;re in the talent pool
            </h1>
            <p className="mx-auto mt-4 max-w-[31rem] text-[1.2rem] leading-[1.7] text-[#69706c]">
              We&apos;ll review your profile and reach out when relevant opportunities match your background.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex min-h-[3.35rem] items-center justify-center rounded-[12px] border border-[#e6e1d8] bg-[#fcfaf6] px-7 text-[1rem] font-medium text-[#2a302d] transition hover:bg-[#f7f3ec]"
            >
              Back to homepage
            </Link>
          </section>
        </div>
      ) : null}
    </main>
  );
}
