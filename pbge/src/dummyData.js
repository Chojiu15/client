export const companies = [
    {
      id: 1,
      name: "root",
      parentId: null
    },
    {
      id: 2,
      name: "home",
      parentId: 1
    },
    {
      id: 3,
      name: "Images",
      parentId: 2
    }
  ];
  
  export const files = [
    {
      id: 1,
      name: "me.jpg",
      companyId: 3,
      content: "Some jpg"
    }
  ];