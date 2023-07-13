import "../index.css";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-gray-800 mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="font-semibold text-xl text-gray-100 mb-4">
                            Privacy Policy for App Icon Generator
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-100">
                                1. Introduction
                            </div>
                            <p className="text-gray-100">
                                App Icon Generator is a tool that helps users generate circular app icons. This Privacy Policy outlines our commitment to protecting the privacy of individuals who use our service.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-100">
                                2. What data is being collected?
                            </div>
                            <p className="text-gray-100">
                                App Icon Generator does not collect any personal data. The service processes images uploaded by users to generate icons, but these images are not stored or shared.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-100">
                                3. How is the data being processed?
                            </div>
                            <p className="text-gray-100">
                                Images are processed directly in the user's browser. No data is sent to or stored on our servers.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-100">
                                4. Why is the data being processed?
                            </div>
                            <p className="text-gray-100">
                                The image data is processed solely to provide the icon generation service and is not used for any other purposes.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-100">
                                5. Who else has access to the data?
                            </div>
                            <p className="text-gray-100">
                                As no data is stored or sent to our servers, only the user has access to the data processed by the Android App Icon Generator.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-100">
                                6. User Consent
                            </div>
                            <p className="text-gray-100">
                                By using the App Icon Generator, you consent to the processing of your image data as outlined in this Privacy Policy.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-100">
                                7. Updates to the Privacy Policy
                            </div>
                            <p className="text-gray-100">
                                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this Privacy Policy periodically for any updates.
                            </p>
                        </div>

                        <div className="mb-4">
                            <div className="font-semibold text-lg text-gray-100">
                                8. Contact Information
                            </div>
                            <p className="text-gray-100">
                                If you have any questions or concerns regarding this Privacy Policy, please contact us at niko.hoffren@gmail.com.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
