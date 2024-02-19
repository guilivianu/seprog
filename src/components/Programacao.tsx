"use client"

import { Tab } from '@headlessui/react'
import React from 'react'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function Programacao() {
  return (
    <section
      id="programacao"
      className="flex items-center justify-center bg-gradient-to-b from-blue-dark to-blue-light text-white py-12 pb-36"
    >
      <div className="flex flex-col items-center max-w-6xl w-full">
        <Tab.Group>
          <div className="flex items-center rounded-3xl bg-gray shadow-xl">
            <Tab.List as="ul" className="flex flex-col items-start gap-1">
              {schedules.map((tab, index) => (
                <Tab
                  as="li"
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      "bg-blue-dark rounded-r-2xl first:rounded-tl-2xl first:rounded-tr-none last:rounded-bl-2xl last:rounded-br-none shadow-lg w-80",
                      selected
                        ? "bg-blue-light w-[360px] z-10 first:mt-0 my-1 last:mb-0"
                        : ""
                    )
                  }
                // className="bg-blue-dark rounded-r-2xl first:rounded-tl-2xl first:rounded-tr-none last:rounded-bl-2xl last:rounded-br-none shadow"
                >
                  <button className="flex flex-col items-start gap-2 text-xl px-6 py-3 text-left">
                    <h3 className="text-2xl font-bold">
                      {tab.data[0].attributes.tabDay}
                    </h3>
                    <span>{tab.data[0].attributes.organizer}</span>
                    <p className=" font-bold">
                      {tab.data[0].attributes.theme}
                    </p>
                  </button>
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              {schedules.map((tab, index) => (
                <Tab.Panel
                  key={index}
                  className=" bg-blue-light m-16 p-6 rounded-3xl"
                >
                  <h2>{tab.data[0].attributes.organizer}</h2>

                  <p>{tab.data[0].attributes.theme}</p>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  )
}
