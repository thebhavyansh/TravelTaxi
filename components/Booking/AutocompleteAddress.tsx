"use client";
import React, { useEffect, useState } from "react";

function AutocompleteAddress() {
  const [source, setSource] = useState<any>();
  const [addressList, setAddressList] = useState<any>([]);
  const [sourceChange, setSourceChange] = useState<any>(false);
  const [destinationChange, setDestinationChange] = useState<any>(false);
  const [destination,setDistination]=useState<any>();
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAddressList();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [source,destination]);

  const getAddressList = async () => {
    const res = await fetch("/api/search-address?q=" + source, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setAddressList(result);
  };
  return (
    <div className="mt-5">
      <div className="relative">
        <label className="text-grey-400">Where From?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
          value={source}
          onChange={(e) => {setSource(e.target.value);setSourceChange(true)}}
        />
        {addressList?.suggestions&&sourceChange ? (
          <div className="shadow-md p-1 rounded-md absolute  w-full bg-white">
            {addressList?.suggestions.map((item: any, index: number) => (
              <h2
                className="p-3 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSource(item.full_address);
                  setAddressList([]);
                }}
              >
                {item.full_address}
              </h2>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-3">
        <label className="text-grey-400">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
        />
      </div>
    </div>
  );
}

export default AutocompleteAddress;
