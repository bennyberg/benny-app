"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

function getRandomSample<T>(arr: T[], count: number): T[] {
  const copy = [...arr]; // don't mutate original
  const n = Math.min(count, copy.length);

  // Fisher–Yates shuffle
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy.slice(0, n);
}

async function getArtData(departmentId: string, count: number) {
  try {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentId}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (!data.objectIDs || data.objectIDs.length === 0) {
      return [];
    }

    const selectedData = getRandomSample(data.objectIDs, count);

    const objects = await Promise.all(
      selectedData.map(async (id) => {
        const res = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        );

        const resJson = await res.json();
        return resJson;
      })
    );

    console.log(objects);

    return objects;
  } catch (err) {
    console.error("Failed to fetch art data:", err);
    return null;
  }
}

export default function Demos() {
  useEffect(() => {
    getArtData("3", 10);
  }, []);

  return (
    <main>
      <h1 className={styles.hey}>Hey</h1>
    </main>
  );
}
