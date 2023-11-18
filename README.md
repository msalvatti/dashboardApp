# Real-Time Dashboard Application

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Customization](#customization)
- [Dashboard](#dashboard)
- [Project Setup](#project-setup)
- [Demo View](#demo-view)

## Overview

Welcome to the Real-Time Dashboard Application! 

This project aims to create a responsive and customizable dashboard for real-time data display using Next.js 13, TailwindCSS, and TypeScript. 

It was developed to demonstrate some knowledge acquired in my journey as a developer.

Users will be able to customize the theme of the dashboard and interact with multiple widgets, including charts, tables, and an animated real-time map.

## Features

This application includes the following features:

- Real-time data fetching from a provided API endpoint, refreshed every 5 seconds.
- Multiple widgets for displaying data, such as charts and tables.
- A simple form for user interaction.
- Dashboard theme customization for users.
- An animated real-time map.

## Customization

This application has theme customization features using context.

Click on the icon on the top right side of the screen to switch between dark/light themes.

The option to hide/show the sidebar menu has also been included. To do this, simply click on the icon in the top left corner of the screen.

To enable the reading of API data automatically every 5s, simply click on the icon on the right side of the screen. 

When the refresh icon is enabled and when the pause icon is disabled.

## Dashboard

As dashboard features, graphs, tables and an animated map with markers were created.

Dashboard data is automatically updated every 5s, when enabled.

Data such as:

Sales Over Time are loaded into a bar chart;

User Engagement are loaded into a pie chart;

Recent Transactions are loaded into a table;

Locations are loaded using the mapbox component, where you can view markers, zoom and navigate to the locations you want.

## Project Setup

To get started with this project, follow these instructions:

1. Clone the repository:

git clone https://github.com/msalvatti/dashboardApp.git

2. Navigate to the project directory:

cd dashboardApp

3. Install dependencies:

npm install

To run the application, execute the following command:

npm start

## Demo View

To access a demo version of the dashboard, use the following address:

https://example-dashboard-app.vercel.app/