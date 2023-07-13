import "../index.css";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="font-semibold text-xl text-gray-800 mb-4">
                            Privacy Policy for Smart Meeting Scheduler
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                1. Introduction
                            </div>
                            <p className="text-gray-600">
                                Smart Meeting Scheduler is a Google Chrome
                                extension designed to streamline and simplify
                                the process of scheduling meetings using Google
                                Calendar. This Privacy Policy outlines our
                                commitment to protecting the privacy of
                                individuals who use our extension.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                2. What data is being collected?
                            </div>
                            <p className="text-gray-600">
                                Smart Meeting Scheduler collects the following
                                data from its users: Google Calendar event
                                details. The extension accesses your Google
                                Calendar events to provide its services.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                3. How is the data being collected?
                            </div>
                            <p className="text-gray-600">
                                Data is collected directly from the user's
                                Google Calendar when they use the extension.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                4. Why is the data being collected?
                            </div>
                            <p className="text-gray-600">
                                The data is collected to facilitate the
                                scheduling of meetings and to provide the user
                                with a personalized experience when using the
                                extension.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                5. How is the data used?
                            </div>
                            <p className="text-gray-600">
                                The collected data is used solely for the
                                operation of the extension. It is used to
                                display and schedule events within the user's
                                Google Calendar.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                6. Who else has access to the data?
                            </div>
                            <p className="text-gray-600">
                                The data accessed by Smart Meeting Scheduler is
                                not shared with any third parties. The
                                developers of the extension also do not have
                                access to this data.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                7. How can users control their data?
                            </div>
                            <p className="text-gray-600">
                                As a user, you have the right to access, modify,
                                and delete your data. This can be done within
                                the Google Calendar application itself.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                8. Updates to the policy
                            </div>
                            <p className="text-gray-600">
                                We reserve the right to make changes to this
                                Privacy Policy. Any changes will be posted on
                                this page. We encourage you to review our
                                Privacy Policy to stay informed.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                9. Data Security
                            </div>
                            <p className="text-gray-600">
                                We are committed to protecting the security of
                                your data. We implement appropriate technical
                                and organizational measures to safeguard your
                                data and prevent unauthorized access or
                                disclosure.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                10. Data Retention
                            </div>
                            <p className="text-gray-600">
                                We retain your calendar data only for as long as
                                necessary to provide the services outlined in
                                this Privacy Policy. Once the data is no longer
                                required, we securely delete or anonymize it.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                11. Third-Party Services
                            </div>
                            <p className="text-gray-600">
                                Smart Meeting Scheduler may utilize third-party
                                services or APIs (e.g., Google Calendar API) to
                                provide its functionalities. Such services may
                                have theirown privacy policies and terms of
                                service, and we encourage you to review them. We
                                do not share your data with any third parties
                                other than those necessary to provide the
                                services of Smart Meeting Scheduler.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                12. User Consent
                            </div>
                            <p className="text-gray-600">
                                By using the Smart Meeting Scheduler extension,
                                you consent to the collection, use, and
                                processing of your data as outlined in this
                                Privacy Policy.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                13. Contact Information
                            </div>
                            <p className="text-gray-600">
                                If you have any questions or concerns regarding
                                this Privacy Policy or the handling of your
                                data, please contact us at niko.hoffren@gmail.com.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-700">
                                14. Updates to the Privacy Policy
                            </div>
                            <p className="text-gray-600">
                                We reserve the right to update or modify this
                                Privacy Policy at any time.  Any changes will be
                                effective immediately upon posting the revised
                                policy on our website. We encourage you to
                                review this Privacy Policy periodically for any
                                updates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
