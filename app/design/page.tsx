import styles from "./page.module.css";
import Image from "next/image";
import imgBlock1Left from "./images/img-block1-left.png";
import imgBlock1Right from "./images/img-block1-right.png";
import imgBlock2Left from "./images/img-block2-left.png";
import imgBlock2Right from "./images/img-block2-right.png";
import reviewLine from "./images/review-line.png";
import reviewPic1 from "./images/review-pic-1.png";
import reviewPic2 from "./images/review-pic-2.png";
import reviewPic3 from "./images/review-pic-3.png";
import reviewStar from "./images/review-star.png";

export default function Design() {
  return (
    <>
      <div dir="rtl" lang="he" id={styles["mashrishim-app"]}>
        <div id={styles["header-section"]}>
          <h1 id={styles["intro-header"]}>
            חסר לכם{" "}
            <span className={styles["second-color-text"]}>ירוק בבית? </span>
            נמאס לכם ממשתלות יקרות? ייחורים לא
            <span className={styles["second-color-text"]}> זורמים? </span>
            הכירו את
            <span className={styles["third-color-text"]}> מַשְרִישִים </span>
          </h1>
        </div>
        <div className={styles["description-section"]}>
          <p className={styles["description-paragraph"]}>
            <span className={styles["description-paragraph-bold"]}>
              האפליקציה מחברת בין חובבי צמחים לצורך החלפה של ייחורים וצמחים
            </span>
          
            , בצורה קלה מתמיד. כל משתמש באפליקציה יוצר פרופיל אישי, מעלה תמונות
            של הצמחים אותם רוצה להחליף מסתכל על אילו צמחים קיימים לאחרים,
            וכשמתעניין בייחור, נוצר מאצ&apos; והצדדים יכולים לתאם מועד החלפה. לכל צמח
            מוצמד כרטיס עם פרטים כמו גיל, תנאי גידול, טיפים לגידול ותמונה
            עדכנית. משתמשים יכולים לדרג ולכתוב המלצות על משתמשים אחרים וכך יהיה
            מדד של אמינות המשתמש, רצינותו, טיב הצמחים אותם מעביר הלאה וכו׳.
          </p>
        </div>
        <div
          className={styles["description-section"]}
          id={styles["image-description-paragraph"]}
        >
          {" "}
          <h2 className={styles["description-subheader"]}>תמונות מהאפליקציה</h2>
          <div
            className={styles["image-container"]}
            id={styles["image-container-1"]}
          >
            <div className={styles["image-block"]} id={styles["image-block-1"]}>
              <Image src={imgBlock1Right} alt="..." id={styles["image-block-1-right-img"]} />
              <Image src={imgBlock1Left} alt="..."  />
            </div>
          </div>
          <div
            className={styles["image-container"]}
            id={styles["image-container-2"]}
          >
            <div className={styles["image-block"]} id={styles["image-block-2"]}>
              <Image src={imgBlock2Right} alt="..." />
              <Image src={imgBlock2Left} alt="..." />
            </div>
          </div>
        </div>
        <div className={styles["description-section"]}>
          <h2 className={styles["description-subheader"]}>רקע</h2>
          <p className={styles["description-paragraph"]}>
            צמחים הם אחת הדרכים הכי פשוטות לשדרג את הדירה ולשפר את האווירה,
            התחביב הזה הפך לפופולרי במיוחד בקרב צעירים וסטודנטים בגילאי 20-35,
            שמחפשים דרך נעימה ונגישה להכניס טבע לחיים העירוניים. אבל כשהם מנסים
            להרחיב את אוסף הצמחים שלהם, הם מהר מאוד נתקלים באתגרים: משתלות
            יקרות, זמינות מוגבלת של זנים מיוחדים, תיאומים מסורבלים בקבוצות
            פייסבוק שונות, וחוסר ידע מעשי שיכול להפוך כל ייחור להרפתקה לא ברורה.
          </p>
          <p className={styles["description-paragraph"]}>
            האפליקציה שלנו מציעה פתרון פשוט וחברתי. היא מחברת בין חובבי צמחים
            לצורך החלפה של ייחורים וצמחים, בצורה קלה מתמיד. כל משתמש באפליקציה
            יוצר פרופיל אישי, מעלה תמונות של הצמחים אותם רוצה להחליף מסתכל על
            אילו צמחים קיימים לאחרים, וכשיש התאמה בין שני הצדדים, נוצר מאצ&apos;
            והצדדים יכולים לתאם מועד החלפה נוח בזכות הקרבה הפיזית שהאפליקציה
            יודעת לזהות. לכל צמח מוצמד כרטיס עם פרטים כמו גיל, תנאי גידול, טיפים
            ותמונה עדכנית.
          </p>
        </div>

        <div
          className={styles["description-section"]}
          id={styles["review-section"]}
        >
          <h2 className={styles["description-subheader"]}>לקוחות מספרים</h2>
          <div className={styles["review"]}>
            <p className={styles["review-top-paragraph"]}>
              “האפליקציה הזו פשוט גאונית! תמיד רציתי להתחיל לאסוף צמחים, אבל לא
              ידעתי מאיפה להתחיל. דרך האפליקציה מצאתי אנשים באיזור שלי שממש שמחו
              לשתף ייחורים, והכול היה קליל — העליתי תמונה, קיבלתי מאצ׳ תוך יום,
              וקיבלתי פוטוס מהמם!”
            </p>
            <Image src={reviewLine} alt="..." />
            <div className={styles["review-bottom-section"]}>
              <div className={styles["review-author-section"]}>
                <Image
                  src={reviewPic1}
                  alt="..."
                  className={styles["review-image"]}
                />
                <div className={styles["review-author-details"]}>
                  <p className={styles["review-author-details-paragraph-bold"]}>
                    אריאל
                  </p>
                  <p
                    className={
                      styles["review-author-details-paragraph-regular"]
                    }
                  >
                    רחביה, ירושלים
                  </p>
                </div>
              </div>
              <div className={styles["review-rating"]}>
                <Image src={reviewStar} alt="..." />
                <Image src={reviewStar} alt="..." />
                <Image src={reviewStar} alt="..." />
                <Image src={reviewStar} alt="..." />
                <Image src={reviewStar} alt="..." />
              </div>
            </div>
          </div>
          <div className={styles["review"]}>
            <p className={styles["review-top-paragraph"]}>
              “החלפתי ייחור ומצאתי את בעלי”{" "}
            </p>
            <Image src={reviewLine} alt="..." />
            <div className={styles["review-bottom-section"]}>
              <div className={styles["review-author-section"]}>
                <Image
                  src={reviewPic2}
                  alt="..."
                  className={styles["review-image"]}
                />
                <div className={styles["review-author-details"]}>
                  <p className={styles["review-author-details-paragraph-bold"]}>
                    דור
                  </p>
                  <p
                    className={
                      styles["review-author-details-paragraph-regular"]
                    }
                  >
                    רחביה, ירושלים
                  </p>
                </div>
              </div>
              <div className={styles["review-rating"]}>
                <Image src={reviewStar} alt="..." />
                <Image src={reviewStar} alt="..." />
                <Image src={reviewStar} alt="..." />
                <Image src={reviewStar} alt="..." />
              </div>
            </div>
          </div>
          <div className={styles["review"]}>
            <p className={styles["review-top-paragraph"]}>
              “סוף סוף אפליקציה שעושה סדר בעולם של החלפות צמחים!”{" "}
            </p>
            <Image src={reviewLine} alt="..." />
            <div className={styles["review-bottom-section"]}>
              <div className={styles["review-author-section"]}>
                <Image
                  src={reviewPic3}
                  alt="..."
                  className={styles["review-image"]}
                />
                <div className={styles["review-author-details"]}>
                  <p className={styles["review-author-details-paragraph-bold"]}>
                    נעם
                  </p>
                  <p
                    className={
                      styles["review-author-details-paragraph-regular"]
                    }
                  >
                    פלורנטין, תל אביב
                  </p>
                </div>
              </div>
              <div className={styles["review-rating"]}>
                <Image src={reviewStar} alt="..." />
                <Image src={reviewStar} alt="..." />
                <Image src={reviewStar} alt="..." />
                <Image src={reviewStar} alt="..." />
                <Image src={reviewStar} alt="..." />
              </div>
            </div>
          </div>
        </div>

        <div id={styles["design-footer"]}>מַשְרִישִים</div>
      </div>
    </>
  );
}
