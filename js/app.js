console.log('🚦 app.js has loaded!'); // Confirm app.js loads

document.addEventListener('alpine:init', () => {
    console.log('✅ Alpine.js initialized!');

    Alpine.data('fetchData', () => ({
        data1: [],
        data2: [],
        
        async init() {
            console.log('🚀 Fetching data...');

            try {
                // Fetch data from the first API endpoint
                const response1 = await fetch('https://jsonplaceholder.typicode.com/users');
                console.log('🔍 Response1 Status:', response1.status);
                if (!response1.ok) throw new Error('Failed to fetch users data');
                
                this.data1 = await response1.json();
                console.log('📦 Data1 loaded:', this.data1);

                // Fetch data from the second API endpoint
                const response2 = await fetch('https://jsonplaceholder.typicode.com/posts');
                console.log('🔍 Response2 Status:', response2.status);
                if (!response2.ok) throw new Error('Failed to fetch posts data');
                
                this.data2 = await response2.json();
                console.log('📦 Data2 loaded:', this.data2);

            } catch (error) {
                console.error('❌ Error fetching data:', error);
            }
        }
    }));

    console.log('🔍 fetchData component definition after registration:', Alpine.data('fetchData'));
});
