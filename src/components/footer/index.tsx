const Footer = ({ content }: { content: string }) => (
  <section id="footer">
    <div className="text-center">
      <span className="font-medium text-[25px] leading-[48px] w-4/5  font-roboto">
        {content}
      </span>
    </div>
  </section>
);
export default Footer;
