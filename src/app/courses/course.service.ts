import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
    providedIn: 'root'
})

export class CourseService{

    retrieveAll(): Course[]{
        return COURSES;
    }

}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Yoga',
        releaseDate: 'November 2, 2019',
        description: 'This is an introductory course that will help beginners to better understand this new universe',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/meditacao.png',
    },
    {
        id: 2,
        name: 'Pilates',
        releaseDate: 'November 4, 2019',
        description: 'This course is an advanced course for profesionals',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/pilates.png',
    },
    {
        id: 3,
        name: 'Dance',
        releaseDate: 'November 8, 2019',
        description: 'For all ages, this course is a good options for those who want to have fun!',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/festeiros.png',
    },
    {
        id: 4,
        name: 'Stretching',
        releaseDate: 'November 16, 2019',
        description: 'Get your body ready for all challenges of life!',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/alongamento.png',
    },
    {
        id: 5,
        name: 'Oratory',
        releaseDate: 'November 25, 2019',
        description: 'Improve your communication skills!',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/microfone.png',
    }
];