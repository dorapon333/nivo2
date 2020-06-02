import React from 'react'
import { render } from 'react-dom'
import { ResponsiveNetwork } from '@nivo/network'
const data = {
  "nodes": [
    {
      "id": "1",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "2",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "3",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "4",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "5",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "6",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "7",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "8",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "9",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "10",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "11",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "12",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "13",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "14",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "15",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "16",
      "radius": 8,
      "depth": 1,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "0",
      "radius": 12,
      "depth": 0,
      "color": "rgb(244, 117, 96)"
    },
    {
      "id": "1.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "1.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "1.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "1.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "1.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "2.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "2.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "2.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "2.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "2.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "2.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "2.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "2.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "2.8",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "2.9",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "2.10",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "3.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "3.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "3.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "3.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "3.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "3.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "3.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "3.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "3.8",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "3.9",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "3.10",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "3.11",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "4.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "4.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "4.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "4.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "4.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "4.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "4.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "4.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "4.8",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "5.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "5.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "5.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "5.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "5.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "5.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "5.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "5.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "5.8",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "5.9",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "5.10",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "5.11",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.8",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.9",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.10",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.11",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.12",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.13",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.14",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "6.15",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.8",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.9",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.10",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.11",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.12",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "7.13",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.8",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.9",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.10",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.11",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.12",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "8.13",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "9.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "9.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "9.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "9.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "10.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "10.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "10.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "10.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "10.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "10.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.8",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.9",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.10",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.11",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.12",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.13",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "11.14",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "12.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "12.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "12.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "12.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "12.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "12.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "12.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "12.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "13.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "13.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "13.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "13.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "13.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "13.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "13.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "13.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "13.8",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "13.9",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "13.10",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "13.11",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "14.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "14.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "14.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "14.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "14.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "14.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "14.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "14.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "14.8",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.8",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.9",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.10",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.11",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.12",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.13",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.14",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "15.15",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.0",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.1",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.2",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.3",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.4",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.5",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.6",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.7",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.8",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.9",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.10",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.11",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "16.12",
      "radius": 4,
      "depth": 2,
      "color": "rgb(232, 193, 160)"
    }
  ],
  "links": [
    {
      "source": "0",
      "target": "1",
      "distance": 50
    },
    {
      "source": "1",
      "target": "10",
      "distance": 70
    },
    {
      "source": "1",
      "target": "1.0",
      "distance": 30
    },
    {
      "source": "1",
      "target": "1.1",
      "distance": 30
    },
    {
      "source": "1",
      "target": "1.2",
      "distance": 30
    },
    {
      "source": "1",
      "target": "1.3",
      "distance": 30
    },
    {
      "source": "1",
      "target": "1.4",
      "distance": 30
    },
    {
      "source": "0",
      "target": "2",
      "distance": 50
    },
    {
      "source": "2",
      "target": "2.0",
      "distance": 30
    },
    {
      "source": "2",
      "target": "2.1",
      "distance": 30
    },
    {
      "source": "2",
      "target": "2.2",
      "distance": 30
    },
    {
      "source": "2",
      "target": "2.3",
      "distance": 30
    },
    {
      "source": "2",
      "target": "2.4",
      "distance": 30
    },
    {
      "source": "2",
      "target": "2.5",
      "distance": 30
    },
    {
      "source": "2",
      "target": "2.6",
      "distance": 30
    },
    {
      "source": "2",
      "target": "2.7",
      "distance": 30
    },
    {
      "source": "2",
      "target": "2.8",
      "distance": 30
    },
    {
      "source": "2",
      "target": "2.9",
      "distance": 30
    },
    {
      "source": "2",
      "target": "2.10",
      "distance": 30
    },
    {
      "source": "0",
      "target": "3",
      "distance": 50
    },
    {
      "source": "3",
      "target": "3.0",
      "distance": 30
    },
    {
      "source": "3",
      "target": "3.1",
      "distance": 30
    },
    {
      "source": "3",
      "target": "3.2",
      "distance": 30
    },
    {
      "source": "3",
      "target": "3.3",
      "distance": 30
    },
    {
      "source": "3",
      "target": "3.4",
      "distance": 30
    },
    {
      "source": "3",
      "target": "3.5",
      "distance": 30
    },
    {
      "source": "3",
      "target": "3.6",
      "distance": 30
    },
    {
      "source": "3",
      "target": "3.7",
      "distance": 30
    },
    {
      "source": "3",
      "target": "3.8",
      "distance": 30
    },
    {
      "source": "3",
      "target": "3.9",
      "distance": 30
    },
    {
      "source": "3",
      "target": "3.10",
      "distance": 30
    },
    {
      "source": "3",
      "target": "3.11",
      "distance": 30
    },
    {
      "source": "0",
      "target": "4",
      "distance": 50
    },
    {
      "source": "4",
      "target": "12",
      "distance": 70
    },
    {
      "source": "4",
      "target": "4.0",
      "distance": 30
    },
    {
      "source": "4",
      "target": "4.1",
      "distance": 30
    },
    {
      "source": "4",
      "target": "4.2",
      "distance": 30
    },
    {
      "source": "4",
      "target": "4.3",
      "distance": 30
    },
    {
      "source": "4",
      "target": "4.4",
      "distance": 30
    },
    {
      "source": "4",
      "target": "4.5",
      "distance": 30
    },
    {
      "source": "4",
      "target": "4.6",
      "distance": 30
    },
    {
      "source": "4",
      "target": "4.7",
      "distance": 30
    },
    {
      "source": "4",
      "target": "4.8",
      "distance": 30
    },
    {
      "source": "0",
      "target": "5",
      "distance": 50
    },
    {
      "source": "5",
      "target": "9",
      "distance": 70
    },
    {
      "source": "5",
      "target": "5.0",
      "distance": 30
    },
    {
      "source": "5",
      "target": "5.1",
      "distance": 30
    },
    {
      "source": "5",
      "target": "5.2",
      "distance": 30
    },
    {
      "source": "5",
      "target": "5.3",
      "distance": 30
    },
    {
      "source": "5",
      "target": "5.4",
      "distance": 30
    },
    {
      "source": "5",
      "target": "5.5",
      "distance": 30
    },
    {
      "source": "5",
      "target": "5.6",
      "distance": 30
    },
    {
      "source": "5",
      "target": "5.7",
      "distance": 30
    },
    {
      "source": "5",
      "target": "5.8",
      "distance": 30
    },
    {
      "source": "5",
      "target": "5.9",
      "distance": 30
    },
    {
      "source": "5",
      "target": "5.10",
      "distance": 30
    },
    {
      "source": "5",
      "target": "5.11",
      "distance": 30
    },
    {
      "source": "0",
      "target": "6",
      "distance": 50
    },
    {
      "source": "6",
      "target": "6.0",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.1",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.2",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.3",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.4",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.5",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.6",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.7",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.8",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.9",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.10",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.11",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.12",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.13",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.14",
      "distance": 30
    },
    {
      "source": "6",
      "target": "6.15",
      "distance": 30
    },
    {
      "source": "0",
      "target": "7",
      "distance": 50
    },
    {
      "source": "7",
      "target": "7.0",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.1",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.2",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.3",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.4",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.5",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.6",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.7",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.8",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.9",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.10",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.11",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.12",
      "distance": 30
    },
    {
      "source": "7",
      "target": "7.13",
      "distance": 30
    },
    {
      "source": "0",
      "target": "8",
      "distance": 50
    },
    {
      "source": "8",
      "target": "7",
      "distance": 70
    },
    {
      "source": "8",
      "target": "8.0",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.1",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.2",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.3",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.4",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.5",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.6",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.7",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.8",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.9",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.10",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.11",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.12",
      "distance": 30
    },
    {
      "source": "8",
      "target": "8.13",
      "distance": 30
    },
    {
      "source": "0",
      "target": "9",
      "distance": 50
    },
    {
      "source": "9",
      "target": "9.0",
      "distance": 30
    },
    {
      "source": "9",
      "target": "9.1",
      "distance": 30
    },
    {
      "source": "9",
      "target": "9.2",
      "distance": 30
    },
    {
      "source": "9",
      "target": "9.3",
      "distance": 30
    },
    {
      "source": "0",
      "target": "10",
      "distance": 50
    },
    {
      "source": "10",
      "target": "10.0",
      "distance": 30
    },
    {
      "source": "10",
      "target": "10.1",
      "distance": 30
    },
    {
      "source": "10",
      "target": "10.2",
      "distance": 30
    },
    {
      "source": "10",
      "target": "10.3",
      "distance": 30
    },
    {
      "source": "10",
      "target": "10.4",
      "distance": 30
    },
    {
      "source": "10",
      "target": "10.5",
      "distance": 30
    },
    {
      "source": "0",
      "target": "11",
      "distance": 50
    },
    {
      "source": "11",
      "target": "11.0",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.1",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.2",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.3",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.4",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.5",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.6",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.7",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.8",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.9",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.10",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.11",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.12",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.13",
      "distance": 30
    },
    {
      "source": "11",
      "target": "11.14",
      "distance": 30
    },
    {
      "source": "0",
      "target": "12",
      "distance": 50
    },
    {
      "source": "12",
      "target": "12.0",
      "distance": 30
    },
    {
      "source": "12",
      "target": "12.1",
      "distance": 30
    },
    {
      "source": "12",
      "target": "12.2",
      "distance": 30
    },
    {
      "source": "12",
      "target": "12.3",
      "distance": 30
    },
    {
      "source": "12",
      "target": "12.4",
      "distance": 30
    },
    {
      "source": "12",
      "target": "12.5",
      "distance": 30
    },
    {
      "source": "12",
      "target": "12.6",
      "distance": 30
    },
    {
      "source": "12",
      "target": "12.7",
      "distance": 30
    },
    {
      "source": "0",
      "target": "13",
      "distance": 50
    },
    {
      "source": "13",
      "target": "1",
      "distance": 70
    },
    {
      "source": "13",
      "target": "13.0",
      "distance": 30
    },
    {
      "source": "13",
      "target": "13.1",
      "distance": 30
    },
    {
      "source": "13",
      "target": "13.2",
      "distance": 30
    },
    {
      "source": "13",
      "target": "13.3",
      "distance": 30
    },
    {
      "source": "13",
      "target": "13.4",
      "distance": 30
    },
    {
      "source": "13",
      "target": "13.5",
      "distance": 30
    },
    {
      "source": "13",
      "target": "13.6",
      "distance": 30
    },
    {
      "source": "13",
      "target": "13.7",
      "distance": 30
    },
    {
      "source": "13",
      "target": "13.8",
      "distance": 30
    },
    {
      "source": "13",
      "target": "13.9",
      "distance": 30
    },
    {
      "source": "13",
      "target": "13.10",
      "distance": 30
    },
    {
      "source": "13",
      "target": "13.11",
      "distance": 30
    },
    {
      "source": "0",
      "target": "14",
      "distance": 50
    },
    {
      "source": "14",
      "target": "5",
      "distance": 70
    },
    {
      "source": "14",
      "target": "7",
      "distance": 70
    },
    {
      "source": "14",
      "target": "14.0",
      "distance": 30
    },
    {
      "source": "14",
      "target": "14.1",
      "distance": 30
    },
    {
      "source": "14",
      "target": "14.2",
      "distance": 30
    },
    {
      "source": "14",
      "target": "14.3",
      "distance": 30
    },
    {
      "source": "14",
      "target": "14.4",
      "distance": 30
    },
    {
      "source": "14",
      "target": "14.5",
      "distance": 30
    },
    {
      "source": "14",
      "target": "14.6",
      "distance": 30
    },
    {
      "source": "14",
      "target": "14.7",
      "distance": 30
    },
    {
      "source": "14",
      "target": "14.8",
      "distance": 30
    },
    {
      "source": "0",
      "target": "15",
      "distance": 50
    },
    {
      "source": "15",
      "target": "15.0",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.1",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.2",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.3",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.4",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.5",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.6",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.7",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.8",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.9",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.10",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.11",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.12",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.13",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.14",
      "distance": 30
    },
    {
      "source": "15",
      "target": "15.15",
      "distance": 30
    },
    {
      "source": "0",
      "target": "16",
      "distance": 50
    },
    {
      "source": "16",
      "target": "10",
      "distance": 70
    },
    {
      "source": "16",
      "target": "11",
      "distance": 70
    },
    {
      "source": "16",
      "target": "15",
      "distance": 70
    },
    {
      "source": "16",
      "target": "16.0",
      "distance": 30
    },
    {
      "source": "16",
      "target": "16.1",
      "distance": 30
    },
    {
      "source": "16",
      "target": "16.2",
      "distance": 30
    },
    {
      "source": "16",
      "target": "16.3",
      "distance": 30
    },
    {
      "source": "16",
      "target": "16.4",
      "distance": 30
    },
    {
      "source": "16",
      "target": "16.5",
      "distance": 30
    },
    {
      "source": "16",
      "target": "16.6",
      "distance": 30
    },
    {
      "source": "16",
      "target": "16.7",
      "distance": 30
    },
    {
      "source": "16",
      "target": "16.8",
      "distance": 30
    },
    {
      "source": "16",
      "target": "16.9",
      "distance": 30
    },
    {
      "source": "16",
      "target": "16.10",
      "distance": 30
    },
    {
      "source": "16",
      "target": "16.11",
      "distance": 30
    },
    {
      "source": "16",
      "target": "16.12",
      "distance": 30
    }
  ]
}

const App = () => {
  return (
    <div style={{width: '800px', height: '800px'}} >
      <ResponsiveNetwork
        nodes={data.nodes}
        links={data.links}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        repulsivity={6}
        iterations={60}
        nodeColor={function(t){return t.color}}
        nodeBorderWidth={1}
        nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
        linkThickness={function(t){return 2*(2-t.source.depth)}}
        motionStiffness={160}
        motionDamping={12}
      />
    </div>
  )
}
render(<App />, document.querySelector('#content'))