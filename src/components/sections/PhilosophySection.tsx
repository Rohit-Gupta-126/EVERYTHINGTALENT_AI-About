import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Bot } from "lucide-react";
import GradientText from "../ui/GradientText";

export default function PhilosophySection() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "#HARDWORK";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && typedText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
      } else if (isDeleting) {
        setTypedText(fullText.slice(0, typedText.length - 1));
      } else {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);
  
  return (
    <section className="relative h-full w-full bg-white dark:bg-slate-950 py-8 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-8 sm:mb-16">
          <div className="flex items-center justify-center w-full">
            <div className="dark:bg-[#404040] bg-gray-100 py-1 px-2 rounded-lg">
              <small className="text-sm leading-none text-center w-full dark:text-white bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
                Our Values
              </small>
            </div>
          </div>
          <h2 className="mt-5 mb-5 text-5xl leading-[44px] md:text-center font-bold text-gray-900 dark:text-white">
            Our Philosophy in{" "}
            <GradientText className="bg-clip-text">
              Action
            </GradientText>
          </h2>
          <p className="text-gray-600 sm:text-xl sm:leading-[30px] dark:text-slate-400 text-center">
            At Everything Talent, Bringing Our Values to Life Through Meaningful
            Actions
          </p>
        </div>

        <div className="storybook-fix w-full">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:grid-rows-3">
            {/* Card 01 - Honesty */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl p-4 flex flex-col bg-yellow-300">
              <div className="font-bold text-yellow-700">01</div>
              <div className="mt-auto flex justify-end">
                <div className="text-xl font-black text-black/60 md:text-2xl">
                  <p>
                    With us, there are no surprises&mdash;just straight talk and
                    genuine commitment.
                  </p>
                  <sup className="text-sm text-yellow-700">#HONESTY</sup>
                </div>
              </div>
            </div>

            {/* Card 03 - Urgency */}
            <div className="h-full w-full rounded-2xl p-4 relative flex flex-col overflow-visible bg-violet-500 sm:col-span-2">
              <strong className="text-2xl font-semibold text-white">
                <div className="font-bold text-[#4f357d]">03</div>
                <p>
                  We act with urgency to ensure progress and deliver results
                  efficiently. Every moment matters.
                </p>
              </strong>
              <div className="ml-4 mt-auto">
                <sup className="text-sm text-[#4f357d]">#URGENCY</sup>
                <div className="flex py-0">
                  {/* Avatar Icons */}
                  {[
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  ].map((src, index) => (
                    <div
                      key={index}
                      className="group relative z-0 -ml-4 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110"
                    >
                      <div className="relative overflow-hidden rounded-full bg-white">
                        <div className="pointer-events-none absolute h-full w-full animate-bg-position bg-gradient-to-r from-violet-500/30 via-cyan-400/30 to-pink-500/30 bg-[length:300%_auto] opacity-15 group-hover:opacity-30" />
                        <Image
                          src={src}
                          alt="Team member"
                          width={32}
                          height={32}
                          className="rounded-full object-cover m-1 size-8"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 02 - Hard Work */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl p-4 flex flex-col bg-orange-300">
              <Bot className="size-8 md:size-12" />
              <div className="text-sm font-medium text-black">02</div>
              <strong className="mt-1 inline-block font-bold text-2xl">
                Embrace hard work
              </strong>
              <div className="font-semibold mt-5">
                <div className="relative font-mono h-6">
                  <div className="absolute inset-0 overflow-hidden">
                    <span className="animate-typing">{typedText}</span>
                    <span className="animate-pulse border-r-2 border-white">
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 05 - Aspiration */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl p-4 flex bg-lime-300 sm:col-span-2">
              <div className="text-sm font-medium text-lime-600">05</div>
              <div className="text-xl mt-5 font-black text-lime-800">
                We&rsquo;re here to help you aim higher, break limits, and achieve
                what others might think impossible.
              </div>
              <sup className="text-sm mt-20 -ml-52 text-lime-600">
                #ASPIRATION
              </sup>
            </div>

            {/* Card 06 - Resilient */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl p-4 flex flex-col items-center justify-center bg-zinc-300 sm:col-span-2">
              <div className="text-sm font-medium text-neutral-800">06</div>
              <div className="group relative flex items-center justify-center px-2 py-2 md:px-6 md:py-4 bg-transparent">
                <div className="text-2xl font-black uppercase text-foreground/05 transition-all group-hover:opacity-50 md:text-4xl">
                  Do hard things
                </div>
                <div className="text-md absolute font-black uppercase transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-4xl text-zinc-800">
                  Do hard things
                </div>
              </div>
              <sup className="text-sm text-neutral-800">#RESILIENT</sup>
            </div>

            {/* Remaining Cards */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl p-4 flex flex-col gap-2 bg-green-200">
              <div className="text-sm font-medium text-neutral-800">04</div>
              <div className="mt-2 font-bold">Grow 1% every day</div>
              <sup className="text-sm mt-4 text-neutral-800">
                #GROWTHMINDSET
              </sup>
            </div>

            <div className="relative h-full w-full overflow-hidden rounded-2xl p-4 flex flex-col gap-2 bg-rose-300">
              <div className="text-sm font-medium text-neutral-800">07</div>
              <div className="mt-2 font-bold text-white">
                We value fresh ideas, bold solutions, and the freedom to imagine
                what&rsquo;s next.
              </div>
              <sup className="text-sm mt-4 text-neutral-800">#CREATIVITY</sup>
            </div>

            <div className="h-full w-full overflow-hidden rounded-2xl p-4 relative flex flex-col bg-blue-200 sm:col-span-2">
              <div className="mt-4">
                <div className="text-sm font-medium text-blue-800">08</div>
                <p className="text-2xl mt-5">
                  Commit to continuous learning and improvement
                </p>
                <div className="text-sm mt-3 text-blue-800">#LEARNING</div>
              </div>
            </div>

            <div className="relative h-full w-full overflow-hidden rounded-2xl p-4 flex items-center gap-4 bg-[#F5E660] sm:col-span-2 md:flex-row-reverse">
              <div className="flex">
                <div>
                  <div className="text-sm font-medium text-[#6C1717]">10</div>
                  <div className="text-2xl font-black text-black/60">
                    Every project, every solution we create is aimed at
                    contributing to something greater.
                  </div>
                  <sup className="text-sm pt-6 text-[#6C1717]">
                    #CONTRIBUTION
                  </sup>
                </div>
              </div>
            </div>

            <div className="h-full w-full overflow-hidden rounded-2xl p-4 relative flex flex-col bg-[#F77C73] sm:col-span-2">
              <div className="mt-4">
                <div className="text-sm font-medium text-[#4E1B26]">09</div>
                <p className="text-2xl text-white">
                  Build trust through actions, not just words.
                </p>
                <div className="text-sm text-[#4E1B26]">#TRUST</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}