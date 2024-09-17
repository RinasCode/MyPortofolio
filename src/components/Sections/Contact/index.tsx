import React from 'react';
import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';
import StackOverflowIcon from '../../Icon/StackOverflowIcon';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
  [ContactType.StackOverflow]: {Icon: StackOverflowIcon, srLabel: 'StackOverflow'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-neutral-800 py-12" sectionId={SectionId.Contact}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">{headerText}</h2>
          <p className="mt-4 text-neutral-300 leading-7">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            {items.map(({type, text, href}) => {
              const {Icon, srLabel} = ContactValueMap[type];
              return (
                <div key={srLabel} className="flex items-center space-x-4">
                  <Icon aria-hidden="true" className="h-6 w-6 text-neutral-100" />
                  <a
                    className={classNames(
                      'text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
                      {'hover:text-white': href},
                    )}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className="text-lg">{text}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
