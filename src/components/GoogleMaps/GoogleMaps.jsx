export default function GoogleMap() {
    return (
        <div style={{ width: "100%", height: "450px" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8131583803493!2d36.805974875048385!3d-1.2861398987016364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10c8d21d1ef5%3A0x9718fa8cbff09943!2sVienna%20Court!5e0!3m2!1sen!2ske!4v1739818699147!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
    </div>
    )
}