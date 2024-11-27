export const sidebarLinks = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: "VscHome",
    },
    {
      id: 2,
      name: "Partner",
      path: "/dashboard/partner",
      icon: "VscAccount",
    },{
      id: 3,
      name: "Product",
      path: "/dashboard/product",
      icon: "VscPackage",
      children: [
        {
          id: 31,
          name: "Add Product",
          path: "/dashboard/product/add",
        },
        {
          id: 32,
          name: "Manage Products",
          path: "/dashboard/product/manage",
        },
      ],
    },
    {
      id: 4,
      name: "Sales",
      path: "/dashboard/sales",
      icon: "VscGraph",
    },
    {
      id: 5,
      name: "Items",
      path: "/dashboard/items",
      icon: "VscChecklist",
    },
    {
      id: 6,
      name: "Refunds",
      path: "/dashboard/refunds",
      icon: "VscSync",
    },
    // {
    //   id: 7,
    //   name: "Customers",
    //   path: "/dashboard/customers",
    //   icon: "VscPeople",
    // },
    {
      id: 8,
      name: "Sellers",
      path: "/dashboard/sellers",
      icon: "VscBriefcase",
    },
    {
      id: 9,
      name: "Reports",
      path: "/dashboard/reports",
      icon: "VscReport",
    },
    {
      id: 10,
      name: "Uploaded Files",
      path: "/dashboard/uploaded-files",
      icon: "VscCloudUpload",
    },
    {
      id: 11,
      name: "Blog System",
      path: "/dashboard/blog-system",
      icon: "VscBook",
    },
    {
      id: 12,
      name: "Doodle",
      path: "/dashboard/doodle",
      icon: "VscSymbolMisc",
    },
    {
      id: 13,
      name: "Marketing",
      path: "/dashboard/marketing",
      icon: "VscMegaphone",
    },
    {
      id: 14,
      name: "Support",
      path: "/dashboard/support",
      icon: "VscComment",
    },
    {
      id: 15,
      name: "Website Setup",
      path: "/dashboard/website-setup",
      icon: "VscTools",
    },
];
  