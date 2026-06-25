import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is PatchUp?',
            answer: 'PatchUp is a teacher-first platform for whole-class social-emotional learning and intercultural communication. Teachers can launch ready-to-run lessons, activities, and check-ins that help students name emotions, build empathy, reset, and feel like they belong.',
        },
        {
            id: 'item-2',
            question: 'Who is PatchUp built for?',
            answer: 'PatchUp is built for K-12 teachers, especially elementary and middle school classrooms, but the activities are flexible enough for older students too. It is designed for the whole class, not just a small support group.',
        },
        {
            id: 'item-3',
            question: 'Do students need accounts?',
            answer: 'No. Students join a teacher-led session with a simple class code, so there are no student logins, passwords, or setup delays.',
        },
        {
            id: 'item-4',
            question: 'What can I run with my class?',
            answer: 'PatchUp gives teachers three kinds of content: lessons for deeper guided learning, shorter activities students actually want to do, and quick check-ins for reading the room.',
        },
        {
            id: 'item-5',
            question: 'Is PatchUp mostly about data?',
            answer: 'No. The main value is the classroom experience: easy SEL and belonging activities teachers can run right away. Insights are available as a light Classroom+ add-on for teachers who want extra context, but data is not the core pitch.',
        },
        {
            id: 'item-6',
            question: 'How fast can I get started?',
            answer: 'A teacher can sign up free, choose a lesson, activity, or check-in, share the code, and run it with the class in minutes.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">
                        The essentials on running PatchUp with your class, from student access to what is included.
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        collapsible
                        type="single"
                        className=" ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed ">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Need to bring PatchUp to a school team?{' '}
                        <a
                            href="#contact"
                            className="text-primary font-medium hover:underline">
                            Book a quick demo
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}
