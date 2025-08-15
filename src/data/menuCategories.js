import { Star } from "lucide-react"

const menuCategories = [
    {
      id: "action-toys",
      name: "Action Toys",
      hasSubmenu: true,
      icon: <Star />,
      color: "from-red-500 to-pink-500",
      hoverColor: "hover:from-red-600 hover:to-pink-600",
      items: [
        {
          name: "All Action Toys",
          href: "/category",
        },
        {
          name: "Action Figures",
          href: "/category",
          onClick: () => window.navigateTo("action-figures"),
          hasSubItems: true,
          subItems: [
            { name: "6-inch Figures", href: "/category", },
            { name: "12-inch Figures", href: "/category", },
            { name: "Deluxe Figures", href: "/category", },
            { name: "Exclusive Variants", href: "/category", },
          ],
        },
        {
          name: "Vehicles & Playsets",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "Vehicles", href: "/category", },
            { name: "Playsets", href: "/category", },
            { name: "Accessories", href: "/category", },
          ],
        },
        {
          name: "Role Play",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "Costumes", href: "/category", },
            { name: "Weapons", href: "/category", },
            { name: "Masks & Helmets", href: "/category", },
          ],
        },
      ],
    },
    {
      id: "brands",
      name: "Popular Brands",
      hasSubmenu: true,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
                />
                <rect width="24" height="24" fill="none" />
              </svg>,
      color: "from-purple-500 to-indigo-500",
      hoverColor: "hover:from-purple-600 hover:to-indigo-600",
      items: [
        {
          name: "Marvel",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "Spider-Man", href: "/category", },
            { name: "Avengers", href: "/category", },
            { name: "X-Men", href: "/category", },
            { name: "Villains", href: "/category", },
          ],
        },
        {
          name: "Star Wars",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "Jedi", href: "/category", },
            { name: "Sith", href: "/category", },
            { name: "Droids", href: "/category", },
            { name: "Vehicles", href: "/category", },
          ],
        },
        {
          name: "DC Comics",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "Batman", href: "/category", },
            { name: "Superman", href: "/category", },
            { name: "Wonder Woman", href: "/category", },
            { name: "Justice League", href: "/category", },
          ],
        },
        {
          name: "Transformers",
          href: "/category",
        },
        {
          name: "Pokemon",
          href: "/category",
        },
        {
          name: "TMNT",
          href: "/category",
        },
      ],
    },
    {
      id: "age-groups",
      name: "Shop by Age",
      hasSubmenu: true,
      icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                version="1.1"
                className="si-glyph si-glyph-birthday-cake"
                width="24"
                height="24"
              >
                <g
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g fill="currentColor">
                    <path
                      d="M2.002,13.062 L2.002,14.169 C2.002,15.474 1.895,15.944 3.484,15.944 L12.394,15.944 C13.982,15.944 13.874,15.473 13.874,14.169 L13.874,13.062 L2.002,13.062 L2.002,13.062 Z"
                      className="si-glyph-fill"
                    ></path>

                    <rect
                      x="4"
                      y="3"
                      width="0.935"
                      height="3.072"
                      className="si-glyph-fill"
                    ></rect>

                    <rect
                      x="7"
                      y="3"
                      width="1"
                      height="2.969"
                      className="si-glyph-fill"
                    ></rect>

                    <rect
                      x="11"
                      y="3"
                      width="0.99"
                      height="2.851"
                      className="si-glyph-fill"
                    ></rect>

                    <path
                      d="M4.965,0.975 C5.065,1.381 4.907,1.848 4.528,1.89 C4.174,1.93 3.903,1.473 4.175,1.02 C4.454,0.56 4.528,0.06 4.528,0.06 C4.528,0.06 4.848,0.487 4.965,0.975 L4.965,0.975 Z"
                      className="si-glyph-fill"
                    ></path>

                    <path
                      d="M7.938,1.021 C8.043,1.447 7.877,1.939 7.469,1.983 C7.088,2.025 6.797,1.544 7.091,1.069 C7.391,0.584 7.469,0.059 7.469,0.059 C7.469,0.059 7.811,0.509 7.938,1.021 L7.938,1.021 Z"
                      className="si-glyph-fill"
                    ></path>

                    <path
                      d="M11.974,1.023 C12.086,1.449 11.908,1.939 11.476,1.983 C11.072,2.025 10.762,1.545 11.075,1.07 C11.394,0.587 11.476,0.062 11.476,0.062 C11.476,0.062 11.839,0.512 11.974,1.023 L11.974,1.023 Z"
                      className="si-glyph-fill"
                    ></path>

                    <g transform="translate(2.000000, 6.000000)">
                      <path
                        d="M1.146,2.437 C1.561,2.437 2.162,2.043 2.339,1.905 C2.344,1.899 3.066,1.221 3.941,1.221 C4.812,1.221 5.564,1.893 5.595,1.922 C5.757,2.062 6.293,2.437 6.769,2.437 C7.331,2.437 7.877,1.932 7.877,1.932 C7.917,1.894 8.664,1.221 9.565,1.221 C10.47,1.221 11.191,1.899 11.221,1.928 C11.382,2.066 11.685,2.269 11.958,2.37 C11.927,1.069 11.329,0.03 9.782,0.03 L2.259,0.03 C0.868,0.03 0.241,0.867 0.105,1.979 C0.33,2.146 0.793,2.437 1.146,2.437 L1.146,2.437 Z"
                        className="si-glyph-fill"
                      ></path>

                      <path
                        d="M10.717,3.469 C10.699,3.453 10.16,2.95 9.566,2.95 C8.967,2.95 8.401,3.457 8.394,3.463 C8.368,3.486 7.643,4.163 6.77,4.163 C5.905,4.163 5.129,3.496 5.096,3.467 C4.933,3.321 4.414,2.95 3.942,2.95 C3.38,2.95 2.838,3.453 2.831,3.457 C2.716,3.549 1.899,4.163 1.147,4.163 C0.761,4.163 0.375,4.004 0.077,3.838 L0.077,5.945 L11.966,5.945 L11.966,4.131 C11.355,4.004 10.789,3.53 10.717,3.469 L10.717,3.469 Z"
                        className="si-glyph-fill"
                      ></path>
                    </g>

                    <rect
                      x="0"
                      y="14"
                      width="15.851"
                      height="1.935"
                      className="si-glyph-fill"
                    ></rect>
                  </g>
                </g>
              </svg>,
      items: [
        {
          name: "Ages 3-5",
          href: "/category",
          onClick: (e) => {
            e.preventDefault()
            window.navigateTo("action-figures")
            setTimeout(() => {
              if (window.applyKidsFilter) {
                window.applyKidsFilter()
              }
            }, 100)
          },
          hasSubItems: true,
          subItems: [
            { name: "Soft Figures", href: "/category", },
            { name: "Large Figures", href: "/category", },
            { name: "Interactive Toys", href: "/category", },
          ],
        },
        {
          name: "Ages 6-8",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "Basic Figures", href: "/category", },
            { name: "Playsets", href: "/category", },
            { name: "Vehicles", href: "/category", },
          ],
        },
        {
          name: "Ages 9-12",
          href: "/category",
        },
        {
          name: "Ages 13+",
          href: "/category",
        },
        {
          name: "Adult Collectors",
          href: "/category",
        },
      ],
    },
    {
      id: "present-finder",
      name: "Present Finder",
      hasSubmenu: false,
      href: "/present-finder",
      icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>,
    },
    {
      id: "services",
      name: "Services",
      hasSubmenu: true,
      icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 22"
                height=" 22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.94971 4.44987C1.94969 3.06915 3.06898 1.94985 4.4497 1.94984L12.0209 1.94983C12.8165 1.94983 13.5796 2.2659 14.1422 2.82851L22.0417 10.728C23.6038 12.2901 23.6038 14.8228 22.0417 16.3849L16.3848 22.0417C14.8227 23.6038 12.2901 23.6038 10.728 22.0417L2.82846 14.1422C2.26586 13.5796 1.94979 12.8166 1.94978 12.0209L1.94971 4.44987ZM8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
                  fill="currentColor"
                />
              </svg>,
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:from-green-600 hover:to-emerald-600",
      items: [
        {
          name: "Store Finder",
          href: "/store-finder",
        },
        {
          name: "Click & Collect",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "Same Day Collection", href: "/category",},
            { name: "Next Day Collection", href: "/category", },
            { name: "Weekend Collection", href: "/category", },
          ],
        },
        {
          name: "Gift Cards",
          href: "/category",
        },
        {
          name: "Birthday Parties",
          href: "/category",
          hasSubItems: true,
          subItems: [
            { name: "Party Packages", href: "/category", },
            { name: "Entertainment", href: "/category", },
            { name: "Party Supplies", href: "/category", },
          ],
        },
      ],
    },
  ]

  export default menuCategories