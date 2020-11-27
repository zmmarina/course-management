import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
            id: 1,
            name: 'Yoga',
            imageUrl: '/assets/images/meditacao.png',
            price: 95.99,
            code: 'XPS9-7',
            duration: 120,
            rating: 4.5,
            releaseDate: 'December, 2, 2019'
            },
            {
            id: 2,
            name: 'Pilates',
            imageUrl: '/assets/images/pilates.png',
            price: 90.99,
            code: 'XPS9-17',
            duration: 120,
            rating: 5,
            releaseDate: 'October, 16, 2020'
            }
        ]   
    }

}