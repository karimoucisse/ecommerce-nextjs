"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { BsCart4 } from "react-icons/bs";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Femme",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "Shoes",
          name: "Chaussures",
          items: [
            { name: "Toutes les chaussures", href: "#" },
            { name: "Lifestyle", href: "#" },
            { name: "Running", href: "#" },
            { name: "Trainning & fitness", href: "#" },
            { name: "Football", href: "#" },
            { name: "Tennis", href: "#" },
          ],
        },
        {
          id: "clothing",
          name: "Vêtements",
          items: [
            { name: "Tous les vêtements", href: "#" },
            { name: "Sweats à capuche", href: "#" },
            { name: "Pantalons", href: "#" },
            { name: "Leggins", href: "#" },
            { name: "Ensemblest", href: "#" },
            { name: "Vestes", href: "#" },
            { name: "Haut & t-shirts", href: "#" },
            { name: "Jupes & robes", href: "#" },
          ],
        },
        {
          id: "Accessories",
          name: "Accessoires et équipement",
          items: [
            { name: "Tous les accessoires et équipement", href: "#" },
            { name: "Sacs & sacs à dos", href: "#" },
            { name: "Chausettes", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Homme",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "Shoes",
          name: "Chaussures",
          items: [
            { name: "Toutes les chaussures", href: "#" },
            { name: "Lifestyle", href: "#" },
            { name: "Running", href: "#" },
            { name: "Trainning & fitness", href: "#" },
            { name: "Football", href: "#" },
            { name: "BasketBall", href: "#" },
            { name: "Tennis", href: "#" },
          ],
        },
        {
          id: "clothing",
          name: "Vêtements",
          items: [
            { name: "Tous les vêtements", href: "#" },
            { name: "Sweats à capuche", href: "#" },
            { name: "Pantallons", href: "#" },
            { name: "Survêtements", href: "#" },
            { name: "Vestes", href: "#" },
            { name: "Hauts et t(shirt", href: "#" },
            { name: "Shorts", href: "#" },
          ],
        },
      ],
    },
    {
      id: "children",
      name: "Enfant",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "Shoes",
          name: "Chaussures",
          items: [
            { name: "Toutes les chaussures", href: "#" },
            { name: "Lifestyle", href: "#" },
            { name: "Running", href: "#" },
            { name: "Trainning & fitness", href: "#" },
            { name: "Football", href: "#" },
            { name: "BasketBall", href: "#" },
            { name: "Tennis", href: "#" },
          ],
        },
        {
          id: "clothing",
          name: "Vêtements",
          items: [
            { name: "Tous les vêtements", href: "#" },
            { name: "Sweats à capuche", href: "#" },
            { name: "Pantallons", href: "#" },
            { name: "Survêtements", href: "#" },
            { name: "Vestes", href: "#" },
            { name: "Hauts et t(shirt", href: "#" },
            { name: "Shorts", href: "#" },
          ],
        },
      ],
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Menu = ({ navList }) => {
  const [open, setOpen] = useState<boolean>(false);
  const user: boolean = false;

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="lg:hidden flex-1">
      {!open ? (
        <FaBarsStaggered size="2rem" onClick={handleMenu} />
      ) : (
        <IoMdClose size="2rem" onClick={handleMenu} />
      )}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <IoMdClose className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="text-gray-900 font-bold"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Menu;
