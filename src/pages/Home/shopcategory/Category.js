import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Car from './Car';
import Truck from './Truck';
import Tractor from './Tractor';
import Bus from './Bus';
import Crane from './Crane';


const Category = ({ category }) => {
    const {cars, trucks, tractors, cranes, buses} = category;

    return (
        <div>
            
            <Tabs>
                <TabList className='flex gap-5 hover:[cursor:pointer]'>
                    <Tab className='border py-1 px-3 rounded font-semibold'>Cars</Tab>
                    <Tab className='border py-1 px-3 rounded font-semibold'>Trucks</Tab>
                    <Tab className='border py-1 px-3 rounded font-semibold'>Truck Cranes</Tab>
                    <Tab className='border py-1 px-3 rounded font-semibold'>Tractors</Tab>
                    <Tab className='border py-1 px-3 rounded font-semibold'>Buses</Tab>
                </TabList>
                <hr className='mt-2 border-gray-300 mb-2' />

                <TabPanel className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    {
                        cars.map(car => <Car
                        key={car._id}
                        car={car}
                        ></Car>)
                    }
                </TabPanel>
                <TabPanel className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                   {
                        trucks.map(truck => <Truck
                        key={truck._id}
                        truck={truck}
                        ></Truck>)
                   }
                </TabPanel>
                <TabPanel className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    {
                        cranes.map(crane => <Crane
                        key={crane._id}
                        crane={crane}
                        ></Crane>)
                    }
                </TabPanel>
                <TabPanel className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    {
                        tractors.map(tractor => <Tractor
                        key={tractor._id}
                        tractor={tractor}
                        ></Tractor>)
                    }
                </TabPanel>
                <TabPanel className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                   {
                        buses.map(bus => <Bus
                        key={bus._id}
                        bus={bus}
                        ></Bus>)
                   }
                </TabPanel>
            </Tabs>
            

            
        </div>
    );
};

export default Category;