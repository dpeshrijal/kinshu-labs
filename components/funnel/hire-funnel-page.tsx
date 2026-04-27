"use client";

import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Mail,
} from "lucide-react";

import { BrandMark } from "@/components/home/brand-mark";
import {
  experienceAccentIcon,
  experienceIcon,
  experienceOptions,
  roleOptions,
  startOptions,
} from "./funnel-data";
import { cn } from "@/lib/utils";

type FunnelStep = 1 | 2 | 3 | 4 | 5;

interface ContactFields {
  name: string;
  email: string;
  company: string;
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
          <span className="text-lg font-medium tracking-[-0.02em]">Kinshu Labs</span>
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
  secondaryIcon: SecondaryIcon,
}: {
  icon: LucideIcon;
  secondaryIcon?: LucideIcon;
}) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(240,243,239,0.9))] text-[var(--color-accent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
      <Icon className="h-7 w-7" />
      {SecondaryIcon ? (
        <SecondaryIcon className="absolute bottom-[0.55rem] right-[0.6rem] h-3.5 w-3.5 rounded-full bg-white text-[var(--color-accent)]" />
      ) : null}
    </div>
  );
}

function SelectCard({
  selected,
  title,
  icon,
  onClick,
  children,
  className,
}: {
  selected: boolean;
  title: string;
  icon: LucideIcon;
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex min-h-[13rem] flex-col items-center justify-center rounded-[18px] border bg-white px-5 py-6 text-center shadow-[0_12px_32px_rgba(20,32,18,0.04)] transition duration-200 hover:border-[#cfe0d8] hover:shadow-[0_18px_40px_rgba(20,32,18,0.06)]",
        selected
          ? "border-[var(--color-accent)] shadow-[0_18px_40px_rgba(20,32,18,0.08)]"
          : "border-[#e8e4db]",
        className,
      )}
    >
      {selected ? (
        <span className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent)] text-white">
          <Check className="h-4 w-4" />
        </span>
      ) : null}
      <IconBadge icon={icon} />
      <div className="mt-5 text-[1.55rem] font-medium tracking-[-0.03em] text-[#101111] sm:text-[1.42rem]">
        {title}
      </div>
      {children}
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

export function HireFunnelPage() {
  const [step, setStep] = useState<FunnelStep>(1);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [selectedStart, setSelectedStart] = useState<string>("");
  const [contact, setContact] = useState<ContactFields>({
    name: "",
    email: "",
    company: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");

  function toggleRole(roleId: string) {
    setSelectedRoles((current) =>
      current.includes(roleId)
        ? current.filter((item) => item !== roleId)
        : [...current, roleId],
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");
    setSubmitting(true);

    const payload = {
      name: contact.name,
      email: contact.email,
      company: contact.company,
      roles: selectedRoles.join(", "),
      experience: selectedExperience,
      start_timeline: selectedStart,
      source: "Kinshu Labs funnel",
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

  const canSubmitContact = contact.name.trim() !== "" && contact.email.trim() !== "";

  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
      {step === 1 ? (
        <StepFrame step={1}>
          <section className="mx-auto flex max-w-[69rem] flex-col items-center pb-2 pt-12 text-center sm:pt-14">
            <h1 className="max-w-[32rem] text-[2.35rem] font-semibold tracking-[-0.04em] text-[#111111] sm:text-[3.55rem] sm:leading-[1.08]">
              What kind of engineer do you need?
            </h1>
            <p className="mt-4 text-[1.1rem] text-[#6d736f]">
              Select one or more roles
            </p>

            <div className="mt-10 grid w-full gap-4 md:grid-cols-2 xl:grid-cols-3">
              {roleOptions.map((option) => (
                <SelectCard
                  key={option.id}
                  selected={selectedRoles.includes(option.id)}
                  title={option.label}
                  icon={option.icon}
                  onClick={() => toggleRole(option.id)}
                />
              ))}
            </div>

            <div className="mt-10 flex w-full justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={selectedRoles.length === 0}
                className={cn(
                  "inline-flex min-h-[3.75rem] items-center justify-center gap-3 rounded-[12px] px-8 text-[1.05rem] font-medium transition",
                  selectedRoles.length > 0
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
          <section className="mx-auto flex max-w-[74rem] flex-col items-center pb-2 pt-12 text-center sm:pt-14">
            <h1 className="max-w-[37rem] text-[2.35rem] font-semibold tracking-[-0.04em] text-[#111111] sm:text-[3.55rem] sm:leading-[1.08]">
              What level of experience do you need?
            </h1>

            <div className="mt-12 grid w-full gap-4 lg:grid-cols-3">
              {experienceOptions.map((option) => (
                <SelectCard
                  key={option.id}
                  selected={selectedExperience === option.id}
                  title={option.label}
                  icon={experienceIcon}
                  onClick={() => setSelectedExperience(option.id)}
                  className="min-h-[15.2rem]"
                >
                  <div className="mt-5 text-[1rem] text-[#737976]">Starting from</div>
                  <div className="mt-2 text-[2.2rem] font-semibold tracking-[-0.04em] text-[#111111]">
                    {option.hourlyRate}
                  </div>
                  <div className="mt-2 text-[1rem] font-medium text-[#111111]">
                    {option.monthlyRate}
                  </div>
                </SelectCard>
              ))}
            </div>

            <div className="mt-12 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 text-[1rem] font-medium text-[#313834] transition hover:text-[#111111]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
                disabled={!selectedExperience}
                className={cn(
                  "inline-flex min-h-[3.75rem] items-center justify-center gap-3 rounded-[12px] px-8 text-[1.05rem] font-medium transition",
                  selectedExperience
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

      {step === 3 ? (
        <StepFrame step={3}>
          <section className="mx-auto flex max-w-[64rem] flex-col items-center pb-2 pt-12 text-center sm:pt-14">
            <h1 className="max-w-[30rem] text-[2.35rem] font-semibold tracking-[-0.04em] text-[#111111] sm:text-[3.55rem] sm:leading-[1.08]">
              When do you want to start?
            </h1>

            <div className="mt-12 grid w-full gap-4 md:grid-cols-3">
              {startOptions.map((option) => (
                <SelectCard
                  key={option.id}
                  selected={selectedStart === option.id}
                  title={option.label}
                  icon={option.icon}
                  onClick={() => setSelectedStart(option.id)}
                  className="min-h-[13.7rem]"
                />
              ))}
            </div>

            <FooterActions
              showBack
              onBack={() => setStep(2)}
              canContinue={Boolean(selectedStart)}
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
              You&apos;re almost done
            </h1>
            <p className="mt-3 text-center text-[1.08rem] text-[#6d736f]">
              Tell us about yourself so we can reach you.
            </p>

            <div className="mt-10 space-y-6">
              <label className="block">
                <span className="mb-2 block text-[0.98rem] font-medium text-[#202522]">
                  Name
                </span>
                <input
                  value={contact.name}
                  onChange={(event) =>
                    setContact((current) => ({ ...current, name: event.target.value }))
                  }
                  placeholder="Your full name"
                  className="h-[3.75rem] w-full rounded-[12px] border border-[#e4dfd6] bg-white px-4 text-[1rem] text-[#111111] outline-none placeholder:text-[#a0a49f] focus:border-[#b8c8bf]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[0.98rem] font-medium text-[#202522]">
                  Work Email
                </span>
                <input
                  type="email"
                  value={contact.email}
                  onChange={(event) =>
                    setContact((current) => ({ ...current, email: event.target.value }))
                  }
                  placeholder="you@company.com"
                  className="h-[3.75rem] w-full rounded-[12px] border border-[#e4dfd6] bg-white px-4 text-[1rem] text-[#111111] outline-none placeholder:text-[#a0a49f] focus:border-[#b8c8bf]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[0.98rem] font-medium text-[#202522]">
                  Company <span className="font-normal text-[#7b817d]">(optional)</span>
                </span>
                <input
                  value={contact.company}
                  onChange={(event) =>
                    setContact((current) => ({ ...current, company: event.target.value }))
                  }
                  placeholder="Your company name"
                  className="h-[3.75rem] w-full rounded-[12px] border border-[#e4dfd6] bg-white px-4 text-[1rem] text-[#111111] outline-none placeholder:text-[#a0a49f] focus:border-[#b8c8bf]"
                />
              </label>
            </div>

            {submitError ? (
              <p className="mt-5 text-sm text-[#b94a48]">{submitError}</p>
            ) : null}

            <FooterActions
              showBack
              onBack={() => setStep(3)}
              canContinue={canSubmitContact}
              continueLabel="Get matched with engineer"
              submitting={submitting}
            />
          </form>
        </StepFrame>
      ) : null}

      {step === 5 ? (
        <div className="mx-auto mt-4 flex min-h-[78vh] w-full max-w-[54rem] items-center justify-center">
          <section className="w-full rounded-[26px] border border-[#ece6dc] bg-white px-6 py-12 text-center shadow-[0_30px_80px_rgba(20,32,18,0.08)] sm:px-10 sm:py-16">
            <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(223,236,228,0.88)_0%,rgba(242,247,243,0.5)_70%,transparent_72%)]">
              <div className="absolute inset-0">
                {Array.from({ length: 14 }).map((_, index) => {
                  const positions = [
                    "left-4 top-8",
                    "left-8 top-5",
                    "left-3 top-16",
                    "left-8 bottom-7",
                    "left-5 bottom-12",
                    "right-6 top-7",
                    "right-3 top-16",
                    "right-8 top-4",
                    "right-4 bottom-9",
                    "right-8 bottom-5",
                    "left-12 top-2",
                    "right-12 top-3",
                    "left-14 bottom-3",
                    "right-14 bottom-2",
                  ];
                  const colors = [
                    "bg-[#d4a34a]",
                    "bg-[var(--color-accent)]",
                    "bg-[#d8d8d3]",
                    "bg-[#d4a34a]",
                    "bg-[var(--color-accent)]",
                    "bg-[#d8d8d3]",
                    "bg-[var(--color-accent)]",
                    "bg-[#d4a34a]",
                    "bg-[var(--color-accent)]",
                    "bg-[#d8d8d3]",
                    "bg-[#d4a34a]",
                    "bg-[#d8d8d3]",
                    "bg-[var(--color-accent)]",
                    "bg-[#d4a34a]",
                  ];
                  const shapes = index % 3 === 0 ? "rotate-45 rounded-[2px]" : "rounded-full";

                  return (
                    <span
                      key={index}
                      className={cn("absolute h-1.5 w-1.5", positions[index], colors[index], shapes)}
                    />
                  );
                })}
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#e2efe6] text-[var(--color-accent)]">
                <Check className="h-14 w-14 stroke-[2.25]" />
              </div>
            </div>

            <h1 className="mt-10 text-[2.9rem] font-semibold tracking-[-0.05em] text-[#111111] sm:text-[3.6rem]">
              You&apos;re all set!
            </h1>
            <p className="mx-auto mt-4 max-w-[31rem] text-[1.28rem] leading-[1.7] text-[#69706c]">
              We&apos;ll match you with a vetted engineer within 24 hours.
            </p>

            <button
              type="button"
              className="mt-10 inline-flex min-h-[3.85rem] items-center justify-center gap-3 rounded-[12px] border border-[#e4dfd6] bg-white px-10 text-[1.08rem] font-medium text-[#111111] shadow-[0_12px_30px_rgba(20,32,18,0.04)] transition hover:bg-[#fbfaf7]"
            >
              <BriefcaseBusiness className="h-5 w-5 text-[var(--color-accent)]" />
              Book a call
            </button>

            <p className="mt-5 text-[1.08rem] text-[#7b817d]">
              or we&apos;ll email you shortly.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex min-h-[3.35rem] items-center justify-center rounded-[12px] border border-[#e6e1d8] bg-[#fcfaf6] px-7 text-[1rem] font-medium text-[#2a302d] transition hover:bg-[#f7f3ec]"
            >
              Back to homepage
            </Link>
          </section>
        </div>
      ) : null}
    </main>
  );
}
