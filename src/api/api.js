
export const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API Fetch Error:", error);
        return null;
    }
};
