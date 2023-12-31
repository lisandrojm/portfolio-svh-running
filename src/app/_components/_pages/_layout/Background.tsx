/* src/app/_components/_pages/_layout/Background.tsx */

import styles from '@/_styles/_components/Background.module.css';
import Icon from '@/_components/_icons/Icons';

export default function Background() {
  return (
    <div>
      <section className={`${styles.animated}`}>
        <ul className={`${styles.floating}`}>
          <li className={`${styles.drift} ${styles.drift1} ${styles.delay1} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float1}`}>
              <Icon kind="bootstrap" size={2} />
            </div>
          </li>
          <li className={`${styles.drift} ${styles.drift2} ${styles.delay3} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float2}`}>
              <Icon kind="tailwind" size={3} />
            </div>
          </li>
          <li className={`${styles.drift} ${styles.drift3} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float3}`}>
              <Icon kind="html" size={2} />
            </div>
          </li>
          <li className={`${styles.drift} ${styles.drift5} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float5}`}>
              <Icon kind="github" size={3} />
            </div>
          </li>
          <li className={`${styles.drift} ${styles.drift6} ${styles.delay2} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float6}`}>
              <Icon kind="nextjs" size={3} />
            </div>
          </li>
          <li className={`${styles.drift} ${styles.drift7} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float7}`}>
              <Icon kind="vercel" size={3} />
            </div>
          </li>
          <li className={`${styles.drift} ${styles.drift8} ${styles.delay5} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float8}`}>
              <Icon kind="js" size={3} />
            </div>
          </li>
          <li className={`${styles.drift} ${styles.drift9} ${styles.delay5} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float9} font-bold`}>
              <Icon kind="react" size={3} />
            </div>
          </li>
          <li className={`${styles.drift} ${styles.drift10} ${styles.delay3} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float10}`}>
              <Icon kind="nodejs" size={3} />
            </div>
          </li>
          <li className={`${styles.drift} ${styles.drift5} ${styles.delay4} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float7}`}>
              <Icon kind="express" size={3} />
            </div>
          </li>
          <li className={`${styles.drift} ${styles.drift2} ${styles.delay5} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float3}`}>
              <Icon kind="nestjs" size={3} />
            </div>
          </li>
          <li className={`${styles.drift} ${styles.drift3} ${styles.delay1} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float8}`}>
              <Icon kind="mongodb" size={3} />
            </div>
          </li>
          <div>
            <li className={`${styles.drift} ${styles.drift6} ${styles.delay5} ${styles.floating_li}`}>
              <div className={`${styles.float} ${styles.float1}`}>
                <Icon kind="ts" size={3} />
              </div>
            </li>
          </div>
          <div className="bg-blue">
            <li className={`${styles.drift} ${styles.drift} ${styles.delay2} ${styles.floating_li}`}>
              <div className={`${styles.float} ${styles.float10}`}>
                <Icon kind="react" size={3} />
              </div>
            </li>
          </div>
        </ul>
      </section>
    </div>
  );
}
