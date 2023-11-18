import React, { useEffect, useState } from "react";
import { fetchDashboardData } from "../api/api";
import { FiLoader, FiAlertOctagon, FiPause, FiRefreshCw } from "react-icons/fi";
import { useTheme } from "../context/themeContext";
import Map from "../components/map";
import Table from "../components/table";
import ChartUser from "../components/chartUser";
import ChartSales from "../components/chartSales";

interface DashboardData {
  success: boolean;
  data: {
    dashboardData: {
      charts: {
        salesOverTime: {
          labels: string[];
          data: number[];
        };
        userEngagement: {
          labels: string[];
          data: number[];
        };
      };
      tables: {
        recentTransactions: {
          id: number;
          user: string;
          amount: string;
          date: string;
        }[];
        topProducts: {
          id: string;
          name: string;
          sales: number;
        }[];
      };
      map: {
        locations: {
          latitude: number;
          longitude: number;
          label: string;
          activity: number;
        }[];
      };
    };
  };
}

export default function Dashboard() {
  const { isDarkTheme } = useTheme();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataSuccess, setIsDataSuccess] = useState(false);
  const [isAutomaticRefresh, setAutomaticRefresh] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDashboardData();
        if (data.success) {
          setDashboardData(data);
          setIsLoading(false);
          setIsDataSuccess(true);
        } else {
          setIsLoading(false);
          setIsDataSuccess(false);
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    let intervalId;
    if (isAutomaticRefresh) {
      const intervalId = setInterval(getData, 5000);

      return () => clearInterval(intervalId);
    } else {
      clearInterval(intervalId);
    }

    getData();
  }, [isAutomaticRefresh]);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center h-full ${isDarkTheme ? "text-white" : "text-black"}`}>
        <FiLoader className="text-4xl animate-spin" />
      </div>
    );
  }

  if (!isLoading && !isDataSuccess) {
    return (
      <div className="flex items-center justify-center h-full">
        <FiAlertOctagon className="text-4xl" />
      </div>
    );
  }

  const chartsData = dashboardData!.data.dashboardData.charts;
  const tablesData = dashboardData!.data.dashboardData.tables;
  const mapData = dashboardData!.data.dashboardData.map;

  return (
    <div className="flex h-full flex-col justify-center items-center">
      <div className={`flex justify-center items-center ${isDarkTheme ? "text-white" : "text-black"}`}>
        <h1 className="text-4xl mb-5 font-bold">Dashboard</h1>

        <button
          className={`fixed right-4 p-2 rounded-full cursor-pointer ${
            isDarkTheme ? "text-gray-dark-300" : "text-gray-dark-700"
          }`}
          onClick={() => setAutomaticRefresh((prevState) => !prevState)}
        >
          {isAutomaticRefresh ? <FiRefreshCw className="text-2xl animate-spin" /> : <FiPause className="text-2xl" />}
        </button>
      </div>

      <ChartSales chartsData={chartsData} isDarkTheme={isDarkTheme} />

      <ChartUser chartsData={chartsData} isDarkTheme={isDarkTheme} />

      <div className="w-4/5">
        <h2 className={`text-center mb-3 ${isDarkTheme ? "text-white" : "text-black"}`}>Recent Transactions</h2>
        <Table tablesData={tablesData} isDarkTheme={isDarkTheme} />
      </div>

      <div className="chart w-4/5 mb-20 flex-row items-center justify-center">
        <h2 className={`text-center mt-10 mb-3 ${isDarkTheme ? "text-white" : "text-black"}`}>Locations</h2>
        <Map locations={mapData.locations} />
      </div>
    </div>
  );
}
