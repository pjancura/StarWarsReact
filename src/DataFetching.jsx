import { useState, useEffect, useRef } from "react";

const BASE_URL = "https://swapi.dev/";

export default function DataFetching() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  const abortControllerRef = useRef();
}
