const Tabs = ({ firstTab, secondTab, thirdTab, fourthTab, currentTab, onTabChange }) => {
    const handleTabClick = (tab) => {
      onTabChange(tab); // Call the handler when a tab is clicked
    };
  
    return (
      <div className="border-b">
        <div className="flex justify-between w-2/5">
          <div
            className={`font-urbanist-bold py-2 text-center flex-1 cursor-pointer ${currentTab === firstTab ? 'activeTab' : ''}`}
            onClick={() => handleTabClick(firstTab)}
          >
            {firstTab}
          </div>
          <div
            className={`font-urbanist-bold py-2 text-center flex-1 cursor-pointer ${currentTab === secondTab ? 'activeTab' : ''}`}
            onClick={() => handleTabClick(secondTab)}
          >
            {secondTab}
          </div>
          <div
            className={`font-urbanist-bold py-2 text-center flex-1 cursor-pointer ${currentTab === thirdTab ? 'activeTab' : ''}`}
            onClick={() => handleTabClick(thirdTab)}
          >
            {thirdTab}
          </div>
          <div
            className={`font-urbanist-bold py-2 text-center flex-1 cursor-pointer ${currentTab === fourthTab ? 'activeTab' : ''}`}
            onClick={() => handleTabClick(fourthTab)}
          >
            {fourthTab}
          </div>
        </div>
      </div>
    );
  };
  
  export default Tabs;
  