import { useCallback, useEffect, useState } from "react";

function useImage(formData) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);

  async function getImage(taskId) {
    let data;
    try {
      const res = await fetch(
        `https://techhk.aoscdn.com/api/tasks/visual/scale/${taskId}`,
        {
          headers: {
            "X-API-KEY": "wxi9undsorawchoya",
          },
        },
      );
      if (!res.ok) throw new Error("can not process image try again");
      const {
        data: { progress, image, err_message },
      } = await res.json();
      const timeout = setTimeout(() => {
        if (progress < 100) getImage(taskId);
        else {
          if (err_message) {
            setError(err_message);
            clearTimeout(timeout);
          }
          setImage(image);
          setIsLoading(false);
          clearTimeout(timeout);
        }
      }, 1500);
      console.log(data);
    } catch (e) {
      setError(e.message);
    }

    return data;
  }
  const uploadImage = useCallback(
    async function uploadImage() {
      if (!formData) return null;

      try {
        setIsLoading(true);
        const response = await fetch(
          "https://techhk.aoscdn.com/api/tasks/visual/scale",
          {
            method: "post",
            headers: {
              "X-API-KEY": "wxi9undsorawchoya",
            },
            body: formData,
          },
        );
        if (!response.ok) throw new Error("error getting data");
        const {
          data: { task_id: taskId },
        } = await response.json();
        if (!taskId) throw new Error("can not get task id");
        const imageData = await getImage(taskId);
        console.log(imageData);
      } catch (e) {
        setError(e.message);
        setIsLoading(false);
      }
    },
    [formData],
  );

  useEffect(() => {
    uploadImage();
  }, [uploadImage]);
  return {
    image,
    error,
    isLoading,
  };
}
export default useImage;
