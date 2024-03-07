  import { useDispatch, useSelector } from "react-redux";
  import { useEffect } from "react";
  import { itemAction } from "../store/itemsSlice";
import { FetchStatusAction } from "../store/fetchStatus";

  function FetchItemsStatus() {
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();    
    console.log(fetchStatus);      //to dispatch the recieved itemLists

    useEffect(() => {
      if (fetchStatus.fetchDone) return;
      const controller = new AbortController();
      const signal = controller.signal;


      dispatch(FetchStatusAction.markFetchingStarted());
      fetch("http://localhost:8080/items", { signal })    //fetching data from api 
        .then((res) => res.json())
        .then(({items}) => {
          dispatch(FetchStatusAction.markFetchDone())
          dispatch(FetchStatusAction.markFetchingFinished());
          console.log("items fetched", items);
          console.log("items fetched", typeof items);
          // Dispatch action to update Redux state with fetched items
          // dispatch(updateItems(items));
          dispatch(itemAction.addInitialItems(items[0]))
          console.log(items);
        })
        .catch((error) => {
          if (error.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            console.error('Error fetching items:', error);
          }
        });

      return () => {
        console.log("cleanup initiated");
        controller.abort();
      };
    }, [fetchStatus, dispatch]); // Ensure dispatch is included in the dependency array

    return (
      <>
       
      </>
    );
  }

  export default FetchItemsStatus;
