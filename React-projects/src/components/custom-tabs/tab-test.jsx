import Tabs from "./tabs";

export default function TabTest() {
  function RandomComponent() {
    return <h1>This is random content</h1>;
  }

  const tabs = [
    {
      label: "Tab 1",
      content: "This is tab1 content",
    },
    {
      label: "Tab 2",
      content: "This is tab2 content",
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
