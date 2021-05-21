{

    // Enum

    // JavaScript - Enum이 존재하지 않음 
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({
        'MONDAY': 0,
        'TUESDAY': 1,
        'WEDNESDAY': 2,
    })
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    enum Days {
        Monday, 
        Tuesday,
        Wednesday,
        Thursday, 
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.Tuesday);
    let day: Days = Days.Saturday;
    day = Days.Sunday;
    day = 10;
    console.log(day);

    // Instead of Enums...
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    let dayOfWeek: DaysOfWeek = 'Monday';
    dayOfWeek = 'Wednesday';

}